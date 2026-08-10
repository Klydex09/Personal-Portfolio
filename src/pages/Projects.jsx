import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import ProgressBar from "../components/ProgressBar";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  return <div><SectionTitle eyebrow="PORTFOLIO" title="Projects" description="A showcase of school, personal and game-development ideas." />
    <div className="card-grid project-grid">{projects.map(p=><article className="glass-card project-card" key={p.id}><div className="project-art"><span>PROJECT</span></div><div className="project-body"><div className="goal-head"><span className="tag">{p.status}</span><ExternalLink size={16}/></div><h3>{p.name}</h3><p>{p.description}</p><div className="chip-row">{p.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div><ProgressBar value={p.progress}/><div className="progress-meta"><span>{p.progress}%</span></div></div></article>)}</div>
  </div>;
}
