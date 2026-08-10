import { ShieldCheck, Map, Smartphone, Code2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <div>
      <SectionTitle
        eyebrow="SYSTEM"
        title="About Personal Life OS"
        description="A personal dashboard designed around James's studies, work, schedule and memories."
      />

      <div className="info-grid">
        <article className="glass-card info-card">
          <Code2 />
          <h3>Architecture</h3>
          <p>React + Vite frontend with editable JavaScript data files and responsive CSS.</p>
        </article>

        <article className="glass-card info-card">
          <ShieldCheck />
          <h3>Privacy</h3>
          <p>The vault has a browser-session password gate, but real credentials should still be stored in a secure backend.</p>
        </article>

        <article className="glass-card info-card">
          <Map />
          <h3>Interactive Location</h3>
          <p>The About Me location section includes an interactive OpenStreetMap view with zoom controls.</p>
        </article>

        <article className="glass-card info-card">
          <Smartphone />
          <h3>Responsive</h3>
          <p>The interface adapts to desktop, tablet, Android and iPhone-sized screens.</p>
        </article>
      </div>

      <div className="glass-card panel">
        <h3>Personal Life OS</h3>
        <p className="large-copy">
          This system combines personal information, education, work, schedules, goals,
          notes, finances, projects and personal media into one organized interface.
        </p>

        <div className="chip-row">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Responsive UI</span>
          <span className="tag">Interactive Map</span>
          <span className="tag">Media Gallery</span>
          <span className="tag">Vault Gate</span>
        </div>
      </div>
    </div>
  );
}
