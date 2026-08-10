import { useEffect, useMemo, useState } from "react";
import { Clock3 } from "lucide-react";
import { dayNames, weeklySchedule } from "../data/schedule";
import { schoolSchedule } from "../data/schoolSchedule";
import SectionTitle from "../components/SectionTitle";

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

function isCurrentTime(start, end, now) {
  const current = now.getHours() * 60 + now.getMinutes();
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);
  return startMinutes >= 0 && endMinutes >= 0 && current >= startMinutes && current < endMinutes;
}

export default function CalendarPage() {
  const [selected, setSelected] = useState(new Date().getDay());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const day = dayNames[selected];
  const label = day.charAt(0).toUpperCase() + day.slice(1);
  const schedule = weeklySchedule[day] || [];
  const classes = schoolSchedule.filter(x => x.day.toLowerCase() === day);
  const today = now.getDay();

  const liveItem = useMemo(
    () => day === dayNames[today]
      ? schedule.find(item => isCurrentTime(item.start, item.end, now))
      : null,
    [day, schedule, today, now]
  );

  return (
    <div>
      <SectionTitle
        eyebrow="SCHEDULE"
        title="Calendar & Weekly Schedule"
        description="Your weekly structure with a live clock and automatic current-activity highlighting."
      />

      <div className="calendar-live-bar glass-card">
        <Clock3 size={18} />
        <div>
          <span>LIVE TIME</span>
          <strong>
            {now.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
            })}
          </strong>
        </div>
        <div className="calendar-live-status">
          <span>NOW</span>
          <b>{liveItem?.title || "No scheduled activity for this time"}</b>
        </div>
      </div>

      <div className="day-tabs">
        {dayNames.map((name, index) => (
          <button
            className={`day-tab ${selected === index ? "selected" : ""}`}
            onClick={() => setSelected(index)}
            key={name}
          >
            {name.slice(0, 3)}
            {today === index && <small>Today</small>}
          </button>
        ))}
      </div>

      <div className="two-column">
        <section className="glass-card panel">
          <h3>{label} Schedule</h3>

          <div className="schedule-list">
            {schedule.map(item => {
              const current = day === dayNames[today] && isCurrentTime(item.start, item.end, now);

              return (
                <div
                  className={`schedule-item ${current ? "current" : ""}`}
                  key={`${item.start}${item.title}`}
                >
                  <div className="schedule-time">
                    {item.start}<br />
                    <span>{item.end}</span>
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <span className="tag">{item.type}</span>
                    {current && <span className="live-pill">NOW</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="glass-card panel">
          <h3>Classes</h3>

          {classes.length ? (
            classes.map(item => (
              <div className="list-row" key={`${item.subject}-${item.time}`}>
                <b>{item.subject}</b>
                <span>{item.time} • {item.mode}</span>
              </div>
            ))
          ) : (
            <p className="muted">No class data assigned for this day.</p>
          )}
        </section>
      </div>
    </div>
  );
}
