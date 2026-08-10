import { useMemo, useState } from "react";
import { budget, expenses } from "../data/expenses";
import SectionTitle from "../components/SectionTitle";

export default function Expenses() {
  const [month, setMonth] = useState(new Date().toISOString().slice(0,7));
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(expenses.map(e=>e.category))];
  const filtered = useMemo(() => expenses.filter(e => e.date.startsWith(month) && (category==="All" || e.category===category)), [month, category]);
  const total = filtered.reduce((s,e)=>s+e.amount,0);
  return <div><SectionTitle eyebrow="FINANCE" title="Expenses" description="Read-only expense data. Edit src/data/expenses.js to change records." />
    <div className="filter-row"><input type="month" value={month} onChange={e=>setMonth(e.target.value)} />{categories.map(c=><button className={category===c?"selected":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
    <div className="stats-grid"><div className="stat-card glass-card"><div><span>Filtered Spending</span><strong>₱{total.toLocaleString()}</strong></div></div><div className="stat-card glass-card"><div><span>Budget</span><strong>₱{budget.toLocaleString()}</strong></div></div><div className="stat-card glass-card"><div><span>Remaining</span><strong>₱{(budget-total).toLocaleString()}</strong></div></div></div>
    <div className="glass-card table-card"><table><thead><tr><th>Date</th><th>Category</th><th>Description</th><th>Amount</th></tr></thead><tbody>{filtered.map((e,i)=><tr key={`${e.date}-${i}`}><td>{e.date}</td><td>{e.category}</td><td>{e.description}</td><td>₱{e.amount.toLocaleString()}</td></tr>)}</tbody></table></div>
  </div>;
}
