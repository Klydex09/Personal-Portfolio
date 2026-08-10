import { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import CalendarPage from "./pages/CalendarPage";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Activities from "./pages/Activities";
import Goals from "./pages/Goals";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AccountVault from "./pages/AccountVault";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Media from "./pages/Media";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [demoGate, setDemoGate] = useState(false);
  const [vaultLocked, setVaultLocked] = useState(true);

  const appContext = useMemo(
    () => ({ demoGate, setDemoGate }),
    [demoGate]
  );

  const lockVault = () => {
    sessionStorage.removeItem("life-os-vault-unlocked");
    setVaultLocked(true);
  };

  return (
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
          onLockVault={lockVault}
        />

        <main className="page-container">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/vault" element={<AccountVault locked={vaultLocked} onUnlock={() => setVaultLocked(false)} onLock={lockVault} />} />
            <Route path="/settings" element={<Settings context={appContext} />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
