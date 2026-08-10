import { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  ShieldAlert,
  LockKeyhole,
  LogOut
} from "lucide-react";
import { accounts } from "../data/accounts";
import SectionTitle from "../components/SectionTitle";

// SHA-256 hash of the private vault PIN/password.
const PASSWORD_HASH =
  "5ba3fc53a805f004e5103155d340061acdcdc2ab9c52df16b96ffee045e71e72";

const SESSION_KEY = "life-os-vault-unlocked";

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);

  const hash = await crypto.subtle.digest("SHA-256", bytes);

  return [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function AccountVault({ locked, onUnlock, onLock }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [shown, setShown] = useState({});
  const [showPin, setShowPin] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [checking, setChecking] = useState(false);

  /*
   * -------------------------------------------------------
   * RESTORE VAULT SESSION
   * -------------------------------------------------------
   */

  useEffect(() => {
    const vaultUnlocked =
      sessionStorage.getItem(SESSION_KEY) === "true";

    if (vaultUnlocked && locked) {
      onUnlock();
    }
  }, [locked, onUnlock]);


  /*
   * -------------------------------------------------------
   * UNLOCK
   * -------------------------------------------------------
   */

  const handleUnlock = async (event) => {
    event.preventDefault();

    if (checking) return;

    setError("");

    if (!pin.trim()) {
      setError("Please enter your security PIN.");
      return;
    }

    /*
     * Optional small protection against repeated
     * accidental submissions.
     */

    setChecking(true);

    try {
      const hash = await sha256(pin);

      if (hash === PASSWORD_HASH) {

        /*
         * Store ONLY the unlocked state.
         *
         * The actual PIN is never stored.
         */

        sessionStorage.setItem(SESSION_KEY, "true");

        setPin("");
        setAttempts(0);
        setShown({});
        setShowPin(false);
        setError("");

        onUnlock();

        return;
      }


      /*
       * WRONG PIN
       */

      const nextAttempts = attempts + 1;

      setAttempts(nextAttempts);

      setPin("");
      setShowPin(false);

      if (nextAttempts >= 3) {
        setError(
          "Incorrect PIN. Please make sure you are an authorized user."
        );
      } else {
        setError(
          "Incorrect security PIN. Please try again."
        );
      }

    } catch (error) {
      console.error("Vault authentication error:", error);

      setError(
        "Unable to verify the PIN. Please try again."
      );

    } finally {
      setChecking(false);
    }
  };


  /*
   * -------------------------------------------------------
   * LOCK VAULT
   * -------------------------------------------------------
   */

  const handleLock = () => {

    /*
     * Remove the session authentication.
     */

    sessionStorage.removeItem(SESSION_KEY);

    /*
     * Hide any passwords that were being shown.
     */

    setShown({});

    /*
     * Clear authentication-related state.
     */

    setPin("");
    setError("");
    setShowPin(false);
    setAttempts(0);

    /*
     * Tell the parent application to lock the Vault.
     */

    onLock();
  };


  /*
   * -------------------------------------------------------
   * TOGGLE ACCOUNT PASSWORD
   * -------------------------------------------------------
   */

  const togglePassword = (index) => {
    setShown((state) => ({
      ...state,
      [index]: !state[index]
    }));
  };


  /*
   * -------------------------------------------------------
   * LOCKED STATE
   *
   * IMPORTANT:
   *
   * The accounts are NOT rendered here.
   *
   * They only appear after successful authentication.
   * -------------------------------------------------------
   */

  if (locked) {
    return (
      <div className="vault-login glass-card">

        <div className="vault-icon">
          <LockKeyhole size={30} />
        </div>

        <span className="eyebrow">
          AUTHORIZED USERS ONLY
        </span>

        <h2>Vault Locked</h2>

        <p>
          Enter your security PIN to unlock this private section.
          Your PIN is never shown on the screen.
        </p>


        <form
          onSubmit={handleUnlock}
          className="vault-form"
        >

          <label htmlFor="vault-pin">
            Security PIN
          </label>


          <div className="vault-input-wrap">

            <input
              id="vault-pin"
              type={showPin ? "text" : "password"}
              value={pin}

              onChange={(event) => {
                setPin(event.target.value);

                if (error) {
                  setError("");
                }
              }}

              placeholder="Enter security PIN"

              autoComplete="off"

              autoFocus

              spellCheck="false"

              disabled={checking}
            />


            <button
              type="button"

              className="vault-toggle-password"

              onClick={() =>
                setShowPin((value) => !value)
              }

              aria-label={
                showPin
                  ? "Hide PIN"
                  : "Show PIN"
              }

              title={
                showPin
                  ? "Hide PIN"
                  : "Show PIN"
              }

              disabled={checking}
            >

              {showPin ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}

            </button>

          </div>


          <button
            className="primary-button"
            type="submit"
            disabled={checking}
          >

            <LockKeyhole size={16} />

            {checking
              ? "Checking..."
              : "Unlock Vault"}

          </button>

        </form>


        {error && (
          <div className="vault-error">
            {error}
          </div>
        )}


        <div className="security-note">

          <ShieldAlert size={17} />

          <span>
            This is a frontend-only access gate.
            It is useful for normal private use, but real
            credentials should be protected by a secure
            backend authentication system.
          </span>

        </div>

      </div>
    );
  }


  /*
   * -------------------------------------------------------
   * UNLOCKED STATE
   *
   * Account information is rendered ONLY here.
   * -------------------------------------------------------
   */

  return (
    <>

      <div className="vault-toolbar glass-card">

        <div>

          <ShieldCheck size={20} />

          <span>
            Vault unlocked for this browser session.
          </span>

        </div>


        <button
          className="secondary-button"
          onClick={handleLock}
        >

          <LogOut size={15} />

          Lock Vault

        </button>

      </div>


      <div className="warning">

        <ShieldAlert />

        <span>
          For real security, authentication and encrypted
          secrets should live on a backend. A React frontend
          cannot hide secrets from someone who can inspect
          its source.
        </span>

      </div>


      <div className="card-grid">

        {accounts.map((account, index) => (

          <article
            className="glass-card account-card"
            key={account.platform}
          >

            <h3>
              {account.platform}
            </h3>


            <p>
              <b>Username:</b>{" "}
              {account.username}
            </p>


            <p>
              <b>Email:</b>{" "}
              {account.email}
            </p>


            <p>

              <b>Password:</b>{" "}

              {shown[index]
                ? account.password
                : "••••••••"}

            </p>


            <button
              className="secondary-button"

              onClick={() =>
                togglePassword(index)
              }

            >

              {shown[index] ? (
                <EyeOff size={15} />
              ) : (
                <Eye size={15} />
              )}

              {shown[index]
                ? "Hide"
                : "Show"}

            </button>


            <small>
              {account.notes}
            </small>

          </article>

        ))}

      </div>

    </>
  );
}