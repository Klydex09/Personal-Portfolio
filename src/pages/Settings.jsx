import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Settings({ context }) {
  const [compact, setCompact] = useState(false);
  return <div className={compact?"compact-preview":""}><SectionTitle eyebrow="SYSTEM" title="Settings" description="Frontend-only preferences for this session." />
    <div className="settings-list glass-card panel"><label><input type="checkbox" checked={compact} onChange={e=>setCompact(e.target.checked)}/> Compact preview mode</label><button className="secondary-button" onClick={()=>context.setDemoGate(v=>!v)}>Toggle demo access gate</button><p className="muted">The demo gate is only a visual interaction. It is not authentication or security.</p></div>
  </div>;
}
