import { Menu, Clock3, PanelLeftClose, PanelLeftOpen, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";

export default function Header({ onMenu, onToggleSidebar, sidebarCollapsed, onLockVault }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const initials = profile.initials || "JK";

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-button mobile-menu" onClick={onMenu} aria-label="Open navigation">
          <Menu size={20} />
        </button>

        <button
          className="icon-button desktop-sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? "Show navigation" : "Hide navigation"}
          title={sidebarCollapsed ? "Show navigation" : "Hide navigation"}
        >
          {sidebarCollapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
        </button>

        <div className="topbar-title">
          <span>My Daily Life</span>
          <h1>Kisokay!</h1>
        </div>
      </div>

      <div className="topbar-right">
        <div className="live-time" aria-live="polite" title="Current local time">
          <Clock3 size={15} />
          <div>
            <strong>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
              })}
            </strong>
            <small>
              {time.toLocaleDateString([], {
                weekday: "short",
                month: "short",
                day: "numeric"
              })}
            </small>
          </div>
        </div>

        <button
          className="icon-button vault-lock-button"
          onClick={onLockVault}
          title="Lock Account Vault"
          aria-label="Lock Account Vault"
        >
          <LockKeyhole size={17} />
          <span>Lock</span>
        </button>

        {/* This is the same JK profile used throughout the OS. */}
        <div className="header-profile" title={profile.name}>
          <div className="header-avatar">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            ) : null}
            <span>{initials}</span>
          </div>
          <div className="header-profile-copy">
            <strong>JK</strong>
            <small>{profile.yearLevel} BSIT</small>
          </div>
        </div>
      </div>
    </header>
  );
}
