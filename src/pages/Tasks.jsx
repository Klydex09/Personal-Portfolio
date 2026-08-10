import { useMemo, useState } from "react";
import { tasks as initialTasks } from "../data/tasks";
import SectionTitle from "../components/SectionTitle";

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => tasks.filter(t => filter === "All" || t.category === filter), [tasks, filter]);
  const toggle = id => setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  return <div><SectionTitle eyebrow="PERSONAL" title="Tasks" description="Completion is temporary and resets when the page is refreshed." />
    <div className="filter-row"><button className={filter==="All"?"selected":""} onClick={()=>setFilter("All")}>All</button>{["School","Skills","Project"].map(x=><button className={filter===x?"selected":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div>
    <div className="task-list">{filtered.map(t => <div className={`glass-card task-row ${t.completed?"done":""}`} key={t.id}><button className="check-button" onClick={()=>toggle(t.id)}>{t.completed?"✓":""}</button><div><h3>{t.title}</h3><span>{t.category} • {t.priority} • Due {t.dueDate}</span></div></div>)}</div>
  </div>;
}
