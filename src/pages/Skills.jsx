import { useMemo, useState } from "react";
import { skills } from "../data/skills";
import ProgressBar from "../components/ProgressBar";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(skills.map(s=>s.category))];
  const filtered = useMemo(()=>skills.filter(s=>category==="All"||s.category===category),[category]);
  return <div><SectionTitle eyebrow="PORTFOLIO" title="Skills" description="Technical and personal strengths." />
    <div className="filter-row">{categories.map(c=><button className={category===c?"selected":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
    <div className="skill-grid">{filtered.map(s=><div className="glass-card skill-card" key={s.name}><div className="goal-head"><h3>{s.name}</h3><span>{s.category}</span></div><ProgressBar value={s.level}/><div className="progress-meta"><span>{s.level}%</span><span>Developing</span></div></div>)}</div>
  </div>;
}
