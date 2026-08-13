import { Moon, Sun, Monitor } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Settings({ context }) {
  const { theme, setTheme } = context;

  return (
    <div>
      <SectionTitle
        eyebrow="SYSTEM"
        title="Settings"
        description="Customize how your personal digital world looks and feels."
      />

      <section className="settings-grid">
        <div className="settings-card glass-card">
          <div className="settings-card-heading">
            <div>
              <span className="eyebrow">APPEARANCE</span>
              <h3>Theme</h3>
            </div>
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </div>

          <div className="theme-options">
            <button className={`theme-option ${theme === "dark" ? "selected" : ""}`} onClick={() => setTheme("dark")}>
              <Moon size={19} />
              <span><b>Dark Mode</b><small>Easy on the eyes and matches the original design.</small></span>
              <i />
            </button>

            <button className={`theme-option ${theme === "light" ? "selected" : ""}`} onClick={() => setTheme("light")}>
              <Sun size={19} />
              <span><b>Light Mode</b><small>A brighter, clean reading experience.</small></span>
              <i />
            </button>

            <button className={`theme-option ${theme === "system" ? "selected" : ""}`} onClick={() => setTheme("system")}>
              <Monitor size={19} />
              <span><b>System</b><small>Follow the device's light or dark preference.</small></span>
              <i />
            </button>
          </div>
        </div>

        <div className="settings-card glass-card">
          <span className="eyebrow">PRIVACY</span>
          <h3>Public portfolio rules</h3>
          <ul className="settings-rules">
            <li>No passwords or PINs are stored.</li>
            <li>No sensitive records are shown.</li>
            <li>Only public-facing account information belongs in Connected Accounts.</li>
            <li>Never place API keys, tokens or private credentials in frontend files.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
