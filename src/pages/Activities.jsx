import { activities } from "../data/activities";
import SectionTitle from "../components/SectionTitle";

export default function Activities() {
  return <div><SectionTitle eyebrow="PERSONAL" title="Activity Timeline" description="School, work, gaming, personal time and other activities." />
    <div className="timeline">{activities.map((a,i)=><div className="timeline-item" key={`${a.date}-${i}`}><div className="timeline-dot"/><div className="glass-card timeline-card"><span className="eyebrow">{a.type} • {a.date}</span><h3>{a.title}</h3><p>{a.description}</p></div></div>)}</div>
  </div>;
}
