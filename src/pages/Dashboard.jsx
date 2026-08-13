import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness, CalendarDays, Clock3, GraduationCap, Target, Images } from "lucide-react";
import { profile } from "../data/profile";
import { weeklySchedule, dayNames } from "../data/schedule";
import { goals } from "../data/goals";
import { mediaItems } from "../data/media";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

function timeToMinutes(value) {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return -1;

  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const period = match[3].toUpperCase();

  if (hour === 12) hour = 0;
  if (period === "PM") hour += 12;

  return hour * 60 + minute;
}

export default function Dashboard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const todayName = dayNames[now.getDay()];
  const todaySchedule = weeklySchedule[todayName] || [];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const currentActivity = useMemo(
    () => todaySchedule.find(item => {
      const start = timeToMinutes(item.start);
      const end = timeToMinutes(item.end);
      return start >= 0 && end >= 0 && currentMinutes >= start && currentMinutes < end;
    }),
    [todaySchedule, currentMinutes]
  );

  const nextActivity = todaySchedule.find(
    item => timeToMinutes(item.start) > currentMinutes
  );

  const dateLabel = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const timeLabel = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div>
      <section className="hero-grid">
        <div className="hero-card">
          <span className="eyebrow">WELCOME BACK</span>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>

          <div className="hero-meta">
            <span>{profile.course}</span>
            <span>{profile.company}</span>
            <span>{dateLabel}</span>
          </div>
        </div>

        <div className="quote-card glass-card">
          <span className="eyebrow">MOTTO</span>
          <blockquote>“{profile.motto}”</blockquote>
        </div>
      </section>

      <div className="stats-grid dashboard-status-grid">
        <div className="stat-card glass-card">
          <div className="stat-icon"><Clock3 size={20} /></div>
          <div>
            <span>Live Time</span>
            <strong>{timeLabel}</strong>
            <small>{Intl.DateTimeFormat().resolvedOptions().timeZone}</small>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon"><CalendarDays size={20} /></div>
          <div>
            <span>Today</span>
            <strong>{todayName}</strong>
            <small>{dateLabel}</small>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon"><BriefcaseBusiness size={20} /></div>
          <div>
            <span>Work Schedule</span>
            <strong>2:00 AM - 11:00 AM</strong>
            <small>Concentrix IT Park</small>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon"><Target size={20} /></div>
          <div>
            <span>Current Activity</span>
            <strong>{currentActivity?.title || "Free Time"}</strong>
            <small>{nextActivity ? `Next: ${nextActivity.title}` : "No more scheduled items"}</small>
          </div>
        </div>
      </div>

      <div className="two-column">
        <section className="glass-card panel">
          <SectionTitle
            eyebrow="LIVE SCHEDULE"
            title="Today"
            description="The highlighted item changes automatically with the current time."
          />

          <div className="live-now-banner">
            <Clock3 size={17} />
            <div>
              <span>NOW   </span>
              <strong>{currentActivity?.title || "No scheduled activity right now"}</strong>
            </div>
          </div>

          <div className="schedule-list">
            {todaySchedule.map(item => {
              const start = timeToMinutes(item.start);
              const end = timeToMinutes(item.end);
              const isCurrent = currentMinutes >= start && currentMinutes < end;

              return (
                <div
                  className={`schedule-item ${isCurrent ? "current" : ""}`}
                  key={`${item.start}-${item.title}`}
                >
                  <div className="schedule-time">
                    {item.start}<br /><span>{item.end}</span>
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span className="tag">{item.type}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="next-box">
            <span>Current</span>
            <strong>{currentActivity?.title || "No scheduled activity right now"}</strong>
            <span>Next</span>
            <strong>{nextActivity?.title || "Nothing else scheduled"}</strong>
          </div>
        </section>

        <section className="glass-card panel">
          <SectionTitle eyebrow="LIFE STATUS" title="At a glance" />

          <div className="mini-list">
            <div>
              <GraduationCap />
              <span><b>Education</b><small>{profile.school} • {profile.yearLevel}</small></span>
            </div>
            <div>
              <BriefcaseBusiness />
              <span><b>Career</b><small>{profile.job}</small></span>
            </div>
            <div>
              <Target />
              <span><b>Top Goal</b><small>{goals[0]?.title || "Keep learning"}</small></span>
            </div>
          </div>

          <div className="motto-box">{profile.philosophy}</div>

          <div className="dashboard-media-card">
            <div>
              <Images size={18} />
              <span>
                <b>Personal Media</b>
                <small>{mediaItems.length ? `${mediaItems.length} items added` : "Ready for your photos and videos"}</small>
              </span>
            </div>
            <Link className="secondary-button" to="/media">Open Gallery</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
