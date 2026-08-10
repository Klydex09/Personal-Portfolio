import { useMemo, useState } from "react";
import { notes } from "../data/notes";
import SectionTitle from "../components/SectionTitle";

export default function Notes() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => notes.filter(n => `${n.title} ${n.category} ${n.content}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div><SectionTitle eyebrow="PERSONAL" title="Notes" description="Static notes with frontend search." />
    <input className="search-input" placeholder="Search notes..." value={query} onChange={e => setQuery(e.target.value)} />
    <div className="card-grid">{filtered.map(n => <article className="glass-card note-card" key={n.id}><span className="eyebrow">{n.category}</span><h3>{n.title}</h3><small>{n.date}</small><p>{n.content}</p></article>)}</div>
  </div>;
}
