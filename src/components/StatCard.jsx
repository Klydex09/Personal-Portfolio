export default function StatCard({ label, value, detail, icon }) {
  return (
    <div className="stat-card glass-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        {detail && <small>{detail}</small>}
      </div>
    </div>
  );
}
