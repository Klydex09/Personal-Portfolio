import { BriefcaseBusiness, GraduationCap, Heart, MapPin, UserRound, Images } from "lucide-react";
import { profile } from "../data/profile";
import { education } from "../data/education";
import { work } from "../data/work";
import { hobbies } from "../data/hobbies";
import { mediaItems } from "../data/media";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <SectionTitle
        eyebrow="PORTFOLIO / ABOUT"
        title="About James"
        description="Personal information, education, career, interests, location and memories."
      />

      <section className="profile-hero glass-card">
        <div className="profile-picture-frame">
          <img
            src={profile.profileImage}
            alt={`${profile.name} profile`}
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.parentElement.classList.add("profile-fallback");
            }}
          />
          <span>JK</span>
        </div>

        <div>
          <span className="eyebrow">SECOND-YEAR BSIT STUDENT</span>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <div className="chip-row">
            <span className="tag">Cebu</span>
            <span className="tag">BSIT Section 1</span>
            <span className="tag">Concentrix</span>
          </div>
        </div>
      </section>

      <div className="info-grid">
        <article className="glass-card info-card">
          <UserRound />
          <h3>Personal</h3>
          <p>{profile.family}</p>
          <p><b>Born:</b> {profile.birthdate}</p>
          <p><b>Age:</b> {profile.age}</p>
          <p><b>Location:</b> {profile.location}</p>
        </article>

        <article className="glass-card info-card">
          <GraduationCap />
          <h3>Education</h3>
          <p><b>{education.course}</b></p>
          <p>{education.school}</p>
          <p>{education.yearLevel} • {education.section}</p>
        </article>

        <article className="glass-card info-card">
          <BriefcaseBusiness />
          <h3>Work</h3>
          <p><b>{work.role}</b></p>
          <p>{work.company}</p>
          <p>{work.schedule}</p>
        </article>

        <article className="glass-card info-card">
          <Heart />
          <h3>Interests</h3>
          <div className="chip-row">
            {hobbies.map(h => <span className="tag" key={h}>{h}</span>)}
          </div>
        </article>
      </div>
            <div className="personal-status-grid">

  {/* CURRENT NOTES */}
  <article className="personal-info-card glass-card">

    <div className="personal-info-header">
      <div className="personal-info-icon">
        📝
      </div>

      <div>
        <span className="personal-info-label">
          CURRENT NOTES
        </span>

        <h3>WAITING NIYA🥴🥴</h3>
      </div>
    </div>

    <p>
      OKS RA NA EYYYY
    </p>

  </article>


  {/* RELATIONSHIP STATUS */}
  <article className="personal-info-card glass-card">

    <div className="personal-info-header">
      <div className="personal-info-icon">
        ❤️
      </div>

      <div>
        <span className="personal-info-label">
          STATUS
        </span>

        <h3>SINGLE</h3>
      </div>
    </div>

    <div className="relationship-status">

      <span className="status-dot"></span>

      <strong>It ended before the relationship became official ARAYY KOOO!!</strong>

    </div>

    <p>
      Never got the chance to formally propose or ask her to become his girlfriend.
      Currently focusing on personal growth, studies, work, and the future
    </p>

  </article>

</div>
      <section className="glass-card panel">
        <SectionTitle eyebrow="PERSONAL BELIEF" title="How I see life" />
        <p className="large-copy">{profile.philosophy}</p>
        <div className="quote-card inner-quote">
          <blockquote>“{profile.motto}”</blockquote>
        </div>
      </section>

      <section className="glass-card panel" id="location">
        <SectionTitle
          eyebrow="LOCATION"
          title="Bulacao / Cabancalan 1 Area"
          description="Interactive map centered on the general area rather than an exact home pin."
        />

        <div className="location-map-wrap">
          <iframe
            title="Interactive map of Bulacao and nearby Cebu area"
            src="https://www.openstreetmap.org/export/embed.html?bbox=123.8365%2C10.2737%2C123.8565%2C10.2837&layer=mapnik&marker=10.278732%2C123.846525"
            loading="lazy"
          />
        </div>

        <div className="map-info">
          <MapPin size={18} />
          <span>
            <b>Bulacao Cabancalan 1, Cebu</b>
            <small>Use the map controls to zoom and explore the surrounding area.</small>
          </span>
        </div>
      </section>

      <section className="glass-card panel">
        <SectionTitle
          eyebrow="PERSONAL MEDIA"
          title="Memories & Highlights"
          description={mediaItems.length ? `${mediaItems.length} media items currently added.` : "Your gallery is ready for personal photos and videos."}
        />

        {mediaItems.length ? (
          <div className="media-grid compact-media-grid">
            {mediaItems.slice(0, 4).map(item => (
              <article className="media-card" key={`${item.src}-${item.title}`}>
                {item.type === "video" ? (
                  <video src={item.src} controls />
                ) : (
                  <img src={item.src} alt={item.title} />
                )}
                <div className="media-caption">
                  <b>{item.title}</b>
                  <span>{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="media-empty">
            <Images size={30} />
            <h3>Add your first memories</h3>
            <p>Put your files inside <code>public/media</code>, then add them to <code>src/data/media.js</code>.</p>
          </div>
        )}

        <Link className="primary-button media-open-button" to="/media">
          Open Full Media Gallery
        </Link>
      </section>
      
    </div>
    
  );
}
