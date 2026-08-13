import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found-wrap">
      <div className="glass-card not-found-card">
        <span className="eyebrow">404</span>
        <h1>Looks like you've wandered outside James' digital world.</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link className="primary-button" to="/dashboard">
          <ArrowLeft size={16} /> Return Home
        </Link>
      </div>
    </div>
  );
}
