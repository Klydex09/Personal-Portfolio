import { ShieldCheck, Map, Smartphone, Code2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <div>
      <SectionTitle
        eyebrow="SYSTEM"
        title="About James Klyde Honor"
        description="A personal digital world built around studies, work, stories, projects, creative work, and meaningful life updates."
      />

      <div className="info-grid">
        <article className="glass-card info-card">
          <Code2 />
          <h3>Architecture</h3>
          <p>React + Vite frontend with editable JavaScript data files and responsive CSS.</p>
        </article>

        <article className="glass-card info-card">
          <ShieldCheck />
          <h3>Public Privacy</h3>
          <p>This portfolio only exposes information that is safe to share publicly, including projects, stories, skills, and media.</p>
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
        <h3>Personal Digital World</h3>
        <p className="large-copy">
          This system combines personal information, education, work, schedules, goals,
          stories, projects, skills, media, and creative writing into one organized digital world.
        </p>

        <div className="chip-row">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Responsive UI</span>
          <span className="tag">Interactive Map</span>
          <span className="tag">Media Gallery</span>
          <span className="tag">Story Archive</span>
        </div>
      </div>
    </div>
  );
}
