import { ExternalLink, Link2, ShieldCheck, UserRound } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { connectedAccounts } from "../data/connectedAccounts";

const iconFor = platform => platform.slice(0, 1).toUpperCase();

export default function ConnectedAccounts() {
  return (
    <div>
      <SectionTitle
        eyebrow="PERSONAL"
        title="Connected Accounts"
        description="Public-facing accounts and services James Klyde Honor uses. No passwords, PINs, tokens or private credentials are stored here."
      />

      <div className="privacy-banner glass-card">
        <ShieldCheck size={20} />
        <div>
          <strong>Credential-free by design</strong>
          <p>This page only contains public profile information and connection details.</p>
        </div>
      </div>

      <div className="accounts-grid">
        {connectedAccounts.map(account => (
          <article className="account-card glass-card" key={`${account.platform}-${account.username}`}>
            <div className="account-icon">{iconFor(account.platform)}</div>
            <div className="account-main">
              <div className="account-heading">
                <div>
                  <span className="eyebrow">{account.category}</span>
                  <h3>{account.platform}</h3>
                </div>
                <span className="status-pill"><span /> {account.status}</span>
              </div>
              <p>{account.description}</p>
              <div className="account-meta">
                <span><UserRound size={14} /> {account.username}</span>
                {account.url ? (
                  <a href={account.url} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} /> Open profile
                  </a>
                ) : (
                  <span><Link2 size={14} /> Private profile link</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
