import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { stories } from "../data/stories";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { mediaItems } from "../data/media";
import { connectedAccounts } from "../data/connectedAccounts";

const pages = [
  { title: "Dashboard", path: "/dashboard", category: "Home" },
  { title: "About James", path: "/portfolio", category: "Personal" },
  { title: "Stories", path: "/stories", category: "Creative" },
  { title: "Projects", path: "/projects", category: "Work" },
  { title: "Skills", path: "/skills", category: "Profile" },
  { title: "Media Gallery", path: "/media", category: "Media" },
  { title: "Connected Accounts", path: "/connected-accounts", category: "Personal" },
  { title: "Settings", path: "/settings", category: "System" }
];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return pages.slice(0, 6);
    }

    const pageResults = pages.filter(item => `${item.title} ${item.category}`.toLowerCase().includes(term));
    const storyResults = stories.filter(item => `${item.title} ${item.type} ${item.description}`.toLowerCase().includes(term)).map(item => ({
      title: item.title,
      path: "/stories",
      category: item.type,
      summary: item.description
    }));
    const projectResults = projects.filter(item => `${item.name} ${item.description} ${item.technologies.join(" ")}`.toLowerCase().includes(term)).map(item => ({
      title: item.name,
      path: "/projects",
      category: "Project",
      summary: item.description
    }));
    const skillResults = skills.filter(item => `${item.name} ${item.category}`.toLowerCase().includes(term)).map(item => ({
      title: item.name,
      path: "/skills",
      category: item.category,
      summary: "Skill profile"
    }));
    const mediaResults = mediaItems.filter(item => `${item.title} ${item.description}`.toLowerCase().includes(term)).map(item => ({
      title: item.title,
      path: "/media",
      category: item.type,
      summary: item.description
    }));
    const accountResults = connectedAccounts.filter(item => `${item.platform} ${item.username} ${item.category}`.toLowerCase().includes(term)).map(item => ({
      title: item.platform,
      path: "/connected-accounts",
      category: item.category,
      summary: item.description
    }));

    return [...pageResults, ...storyResults, ...projectResults, ...skillResults, ...mediaResults, ...accountResults].slice(0, 10);
  }, [query]);

  if (!open) return null;

  const openResult = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Global search">
      <div className="search-panel glass-card">
        <div className="search-header">
          <div className="search-title-wrap">
            <Search size={18} />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search stories, projects, skills, pages..."
              aria-label="Search site content"
            />
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <div className="search-results">
          {results.length ? results.map((result, index) => (
            <button key={`${result.title}-${index}`} type="button" className="search-result" onClick={() => openResult(result.path)}>
              <div className="search-result-copy">
                <span>{result.category}</span>
                <strong>{result.title}</strong>
                <small>{result.summary || "Open this section"}</small>
              </div>
              <ArrowRight size={16} />
            </button>
          )) : (
            <div className="search-empty">
              <Search size={20} />
              <p>No matches found for “{query}”. Try another keyword.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
