import { goals } from "../data/goals";
import ProgressBar from "../components/ProgressBar";
import SectionTitle from "../components/SectionTitle";

export default function Goals() {
  return <div><SectionTitle eyebrow="PERSONAL" title="Goals" description="Long-term goals for education, skills and career." />
    <div className="card-grid">{goals.map(g=><article className="glass-card goal-card" key={g.id}><div className="goal-head"><span className="tag">{g.category}</span><span>{g.status}</span></div><h3>{g.title}</h3><p>{g.description}</p><ProgressBar value={g.progress}/><div className="progress-meta"><span>{g.progress}%</span><span>Deadline {g.deadline}</span></div></article>)}</div>
  </div>;
}
