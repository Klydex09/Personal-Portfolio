import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { budget, expenses } from "../data/expenses";
import SectionTitle from "../components/SectionTitle";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Reports() {
  const categories = useMemo(() => [...new Set(expenses.map(e=>e.category))], []);
  const values = categories.map(c=>expenses.filter(e=>e.category===c).reduce((s,e)=>s+e.amount,0));
  const total = values.reduce((a,b)=>a+b,0);
  const data = { labels: categories, datasets: [{ data: values }] };
  return <div><SectionTitle eyebrow="FINANCE" title="Expense Reports" description="Visual overview based on static expense records." />
    <div className="report-grid"><div className="glass-card chart-card"><h3>Category Breakdown</h3><div className="chart-wrap">{categories.length ? <Doughnut data={data} options={{plugins:{legend:{labels:{color:"#ddd"}}}}}/> : <p>No data.</p>}</div></div>
    <div className="glass-card report-summary"><div><span>Total Spending</span><strong>₱{total.toLocaleString()}</strong></div><div><span>Budget</span><strong>₱{budget.toLocaleString()}</strong></div><div><span>Remaining</span><strong>₱{(budget-total).toLocaleString()}</strong></div></div></div>
  </div>;
}
