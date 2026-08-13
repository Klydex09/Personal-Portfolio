import { NavLink } from "react-router-dom";
import {
  CalendarDays, CheckSquare, FolderKanban, Gauge, Goal, Images,
  NotebookPen, Settings, Sparkles, UserRound, UsersRound, BookOpen, X
} from "lucide-react";

const groups = [
  {
    label: "Portfolio",
    items: [
      ["About Me", "/portfolio", UserRound],
      ["Projects", "/projects", FolderKanban],
      ["Skills", "/skills", Sparkles],
      ["Media Gallery", "/media", Images]
    ]
  },
  { label: "Dashboard", items: [["Dashboard", "/dashboard", Gauge]] },
  {
    label: "Personal",
    items: [
      ["Notes", "/notes", NotebookPen],
      ["Tasks", "/tasks", CheckSquare],
      ["Stories", "/stories", BookOpen],
      ["Goals", "/goals", Goal],
      ["Connected Accounts", "/connected-accounts", UsersRound]
    ]
  },
  {
    label: "Schedule",
    items: [["Calendar", "/calendar", CalendarDays]]
  },
  {
    label: "System",
    items: [["Settings", "/settings", Settings]]
  }
];

export default function Sidebar({ open, onClose, collapsed }) {
  return (
    <>
      <div className={`mobile-backdrop ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${open ? "open" : ""} ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-mark">J</div>
          <div className="brand-copy">
            <strong>Klydex09</strong>
            <span>James Klyde N. Honor</span>
          </div>
          <button className="icon-button mobile-close" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {groups.map(group => (
            <div className="nav-group" key={group.label}>
              <div className="nav-label">{group.label}</div>
              {group.items.map(([label, path, Icon]) => (
                <NavLink
                  key={label}
                  to={path}
                  title={collapsed ? label : undefined}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  onClick={onClose}
                >
                  <Icon size={17} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span>BSIT • 2nd Year</span>
          <span>Safety First</span>
        </div>
      </aside>
    </>
  );
}
