import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchOverlay from "./components/SearchOverlay";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import CalendarPage from "./pages/CalendarPage";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Stories from "./pages/Stories";
import Goals from "./pages/Goals";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ConnectedAccounts from "./pages/ConnectedAccounts";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const THEME_KEY = "james-portfolio-theme";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "dark");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const resolvedTheme = theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = resolvedTheme;
    };

    applyTheme();
    localStorage.setItem(THEME_KEY, theme);
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && key === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (key === "escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const appContext = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <>
      <div className={`app-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        <Sidebar
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          collapsed={sidebarCollapsed}
        />

        <div className="main-shell">
          <Header
            onMenu={() => setMobileOpen(true)}
            onToggleSidebar={() => setSidebarCollapsed(value => !value)}
            sidebarCollapsed={sidebarCollapsed}
          />

          <main className="page-container">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/connected-accounts" element={<ConnectedAccounts />} />
              <Route path="/settings" element={<Settings context={appContext} />} />
              <Route path="/about" element={<About />} />
              <Route path="/media" element={<Media />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
