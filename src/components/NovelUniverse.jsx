import { useMemo, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { novelUniverse } from "../data/novel";

const tabs = [
  { id: "overview", label: "Overview", icon: "📖" },
  { id: "timeline", label: "Timeline", icon: "⏳" },
  { id: "worlds", label: "Worlds", icon: "🌍" },
  { id: "characters", label: "Characters", icon: "👥" },
  { id: "factions", label: "Factions", icon: "🛡️" },
  { id: "races", label: "Races", icon: "👹" },
  { id: "technology", label: "Technology", icon: "⚙️" },
  { id: "void", label: "VOID", icon: "⚠️" },
  { id: "magic", label: "Magic", icon: "✨" },
  { id: "heroes", label: "Heroes", icon: "⭐" },
  { id: "cores", label: "World Cores", icon: "🔮" },
  { id: "gates", label: "Gates", icon: "🚪" },
  { id: "chapters", label: "Chapters", icon: "📕" },
  { id: "arcs", label: "Arcs", icon: "📜" },
  { id: "locations", label: "Locations", icon: "📍" },
  { id: "events", label: "Events", icon: "💥" },
  { id: "glossary", label: "Glossary", icon: "📚" },
  { id: "media", label: "Media", icon: "📸" },
  { id: "spoilers", label: "Spoilers", icon: "🔐" },
];

export default function NovelUniverse({ onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedChapter, setSelectedChapter] = useState(novelUniverse.chapters?.[0] ?? null);
  const [showSpoilers, setShowSpoilers] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.45);

  const currentChapterIndex = useMemo(() => {
    if (!selectedChapter || !novelUniverse.chapters) return 0;
    return novelUniverse.chapters.findIndex((chapter) => chapter.id === selectedChapter.id);
  }, [selectedChapter]);

  const moveChapter = (direction) => {
    if (!novelUniverse.chapters) return;
    const nextIndex = currentChapterIndex + direction;
    if (nextIndex >= 0 && nextIndex < novelUniverse.chapters.length) {
      setSelectedChapter(novelUniverse.chapters[nextIndex]);
    }
  };

  const renderOverview = () => (
    <div className="ss-panel">
      <h3>📖 Overview</h3>
      <p style={{ color: "#ddd", lineHeight: 1.8 }}>{novelUniverse.premise}</p>
      <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(100,200,255,.1)" }}>
        <p style={{ color: "#aaa", fontSize: "13px", lineHeight: 1.6 }}>{novelUniverse.latestLore}</p>
      </div>
      <div className="ss-card-grid" style={{ marginTop: "24px" }}>
        {novelUniverse.worlds?.map((world) => (
          <div key={world.id} className="ss-card">
            <div className="ss-card-title">{world.name}</div>
            <div className="ss-card-meta">{world.status}</div>
            <div className="ss-card-desc">{world.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="ss-panel">
      <h3>⏳ Timeline</h3>
      <div className="ss-timeline">
        {novelUniverse.timeline?.map((item, index) => (
          <div key={`${item.title}-${index}`} className="ss-timeline-item">
            <div className="ss-timeline-dot" />
            <div className="ss-timeline-line" />
            <div className="ss-timeline-content">
              <div className="ss-timeline-label">{item.arc}</div>
              <div className="ss-timeline-title">{item.title}</div>
              <p style={{ color: "#aaa", fontSize: "12px", marginTop: "6px" }}>{item.world}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWorlds = () => (
    <div className="ss-panel">
      <h3>🌍 Worlds</h3>
      <div className="ss-card-grid">
        {novelUniverse.worlds?.map((world) => (
          <div key={world.id} className="ss-card">
            <div className="ss-card-title">{world.name}</div>
            <div className="ss-card-meta">{world.status}</div>
            <div className="ss-card-desc">{world.summary}</div>
            <div style={{ marginTop: "12px", fontSize: "11px", color: "#888" }}>
              <strong style={{ color: "#aaa" }}>Environment:</strong> {world.environment}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCharacters = () => (
    <div className="ss-panel">
      <h3>👥 Characters</h3>
      <div className="ss-card-grid">
        {novelUniverse.characters?.map((character) => (
          <div key={character.id} className="ss-card">
            <div className="ss-card-title">{character.name}</div>
            <div className="ss-card-meta">{character.role}</div>
            <div className="ss-card-desc">{character.summary}</div>
            <div style={{ marginTop: "12px", fontSize: "11px", color: "#888" }}>
              <strong style={{ color: "#aaa" }}>Origin:</strong> {character.origin}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFactions = () => (
    <div className="ss-panel">
      <h3>🛡️ Factions</h3>
      <div className="ss-list">
        {novelUniverse.factions?.map((faction) => (
          <div key={faction.id} className="ss-list-item">
            <strong>{faction.name}</strong>
            <span>{faction.summary}</span>
            <span style={{ marginTop: "3px", display: "block", color: "#888" }}>Leader: {faction.leader}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRaces = () => (
    <div className="ss-panel">
      <h3>👹 Races</h3>
      <div className="ss-card-grid">
        {novelUniverse.races?.map((race, index) => (
          <div key={`${race.name}-${index}`} className="ss-card">
            <div className="ss-card-title">{race.name}</div>
            <div className="ss-card-meta">{race.tier}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTechnology = () => (
    <div className="ss-panel">
      <h3>⚙️ Technology</h3>
      <div className="ss-list">
        {novelUniverse.technology?.map((item) => (
          <div key={item.name} className="ss-list-item">
            <strong>{item.name}</strong>
            <span>{item.description}</span>
            <span style={{ marginTop: "3px", display: "block", color: "#888" }}>Faction: {item.faction}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVoid = () => (
    <div className="ss-panel" style={{ borderColor: "rgba(255,100,100,.2)", background: "linear-gradient(135deg,rgba(60,20,20,.5),rgba(40,15,15,.5))" }}>
      <h3 style={{ color: "#ff6b6b" }}>⚠️ VOID</h3>
      <p style={{ color: "#ddd", lineHeight: 1.8 }}>{novelUniverse.voidLore?.overview}</p>
      <div style={{ marginTop: "20px" }}>
        <strong style={{ color: "#ff8888" }}>Behavior:</strong>
        <ul style={{ color: "#aaa", lineHeight: 1.8, paddingLeft: "18px" }}>
          {novelUniverse.voidLore?.behavior?.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );

  const renderMagic = () => (
    <div className="ss-panel">
      <h3>✨ Magic</h3>
      <div className="ss-list">
        {novelUniverse.magic?.map((entry, index) => (
          <div key={`${entry.type || "magic"}-${index}`} className="ss-list-item">
            <strong>{entry.type || "Magic System"}</strong>
            <span>{entry.description}</span>
          </div>
        )) ?? <div className="ss-list-item"><strong>Magic</strong><span>Magic systems are represented across Aetheris through divine power, artifacts, and magical factions.</span></div>}
      </div>
    </div>
  );

  const renderHeroes = () => (
    <div className="ss-panel">
      <h3>⭐ Heroes</h3>
      <div className="ss-card-grid">
        {novelUniverse.heroes?.map((hero, index) => (
          <div key={`${hero.name}-${index}`} className="ss-card">
            <div className="ss-card-title">{hero.name}</div>
            <div className="ss-card-meta">{hero.role}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCores = () => (
    <div className="ss-panel">
      <h3>🔮 World Cores</h3>
      <div className="ss-list">
        {novelUniverse.worlds?.map((world) => (
          <div key={world.id} className="ss-list-item">
            <strong>{world.name}</strong>
            <span>{world.summary}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGates = () => (
    <div className="ss-panel">
      <h3>🚪 Gates</h3>
      <div className="ss-list">
        <div className="ss-list-item">
          <strong>Gate Network</strong>
          <span>Interdimensional breaches connect the worlds and guide humanity toward the deeper truth behind the Overseers.</span>
        </div>
      </div>
    </div>
  );

  const renderChapters = () => (
    <div>
      {selectedChapter ? (
        <div className="ss-chapter-reader">
          <button onClick={() => setSelectedChapter(null)} className="ss-back-button" style={{ marginBottom: "20px" }}>
            <ArrowLeft size={14} /> Back to Chapters
          </button>
          <span className="ss-chapter-number">Chapter {selectedChapter.number}</span>
          <h2 className="ss-chapter-title">{selectedChapter.title}</h2>
          <div className="ss-chapter-arc">{selectedChapter.arc}</div>
          <div className="ss-chapter-content">
            {selectedChapter.content?.map((paragraph, index) => <p key={`${selectedChapter.id}-${index}`}>{paragraph}</p>)}
          </div>
          <div className="ss-chapter-controls">
            <button className="ss-chapter-btn" onClick={() => moveChapter(-1)} disabled={currentChapterIndex <= 0}>
              <ChevronLeft size={16} /> Previous
            </button>
            <span style={{ color: "#aaa", fontSize: "12px" }}>
              Chapter {currentChapterIndex + 1} of {novelUniverse.chapters.length}
            </span>
            <button className="ss-chapter-btn" onClick={() => moveChapter(1)} disabled={currentChapterIndex >= (novelUniverse.chapters.length - 1)}>
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div className="ss-panel">
          <h3>📕 Chapters</h3>
          <div className="ss-list">
            {novelUniverse.chapters?.map((chapter) => (
              <div key={chapter.id} className="ss-list-item" onClick={() => setSelectedChapter(chapter)}>
                <strong>Chapter {chapter.number}: {chapter.title}</strong>
                <span>{chapter.summary}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderArcs = () => (
    <div className="ss-panel">
      <h3>📜 Arcs</h3>
      <div className="ss-list">
        {novelUniverse.arcs?.map((arc) => (
          <div key={arc.id} className="ss-list-item">
            <strong>{arc.name}</strong>
            <span>{arc.status}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLocations = () => (
    <div className="ss-panel">
      <h3>📍 Locations</h3>
      <div className="ss-card-grid">
        {novelUniverse.locations?.map((location) => (
          <div key={location.name} className="ss-card">
            <div className="ss-card-title">{location.name}</div>
            <div className="ss-card-meta">{location.world}</div>
            <div className="ss-card-desc">{location.description}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="ss-panel">
      <h3>💥 Events</h3>
      <div className="ss-list">
        {novelUniverse.events?.map((event, index) => (
          <div key={`${event.title}-${index}`} className="ss-list-item">
            <strong>{event.title}</strong>
            <span>{event.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGlossary = () => (
    <div className="ss-panel">
      <h3>📚 Glossary</h3>
      <div className="ss-list">
        {novelUniverse.glossary?.map((entry) => (
          <div key={entry.term} className="ss-list-item">
            <strong>{entry.term}</strong>
            <span>{entry.definition}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMedia = () => (
    <div className="ss-panel">
      <h3>📸 Media</h3>
      <div className="ss-list">
        {novelUniverse.media?.map((item) => (
          <div key={item.title} className="ss-list-item">
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSpoilers = () => (
    <div className="ss-panel" style={{ borderColor: "rgba(200,100,255,.2)", background: "linear-gradient(135deg,rgba(40,20,60,.5),rgba(30,15,45,.5))" }}>
      <h3 style={{ color: "#d4a5ff" }}>🔐 Spoilers</h3>
      <button
        onClick={() => setShowSpoilers((value) => !value)}
        style={{
          background: showSpoilers ? "rgba(200,100,255,.2)" : "transparent",
          border: "1px solid rgba(200,100,255,.3)",
          color: "#d4a5ff",
          padding: "10px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "11px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: ".08em",
          marginBottom: "16px"
        }}
      >
        {showSpoilers ? "Hide Spoilers" : "Reveal Spoilers"}
      </button>
      {showSpoilers && (
        <div style={{ color: "#ddd", lineHeight: 1.8 }}>
          {novelUniverse.spoilers?.map((spoiler, index) => (
            <div key={`${spoiler.title}-${index}`} style={{ marginBottom: "20px" }}>
              <strong style={{ color: "#d4a5ff", display: "block", marginBottom: "6px" }}>{spoiler.title}</strong>
              <p style={{ color: "#aaa" }}>{spoiler.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return renderOverview();
      case "timeline": return renderTimeline();
      case "worlds": return renderWorlds();
      case "characters": return renderCharacters();
      case "factions": return renderFactions();
      case "races": return renderRaces();
      case "technology": return renderTechnology();
      case "void": return renderVoid();
      case "magic": return renderMagic();
      case "heroes": return renderHeroes();
      case "cores": return renderCores();
      case "gates": return renderGates();
      case "chapters": return renderChapters();
      case "arcs": return renderArcs();
      case "locations": return renderLocations();
      case "events": return renderEvents();
      case "glossary": return renderGlossary();
      case "media": return renderMedia();
      case "spoilers": return renderSpoilers();
      default: return renderOverview();
    }
  };

  return (
    <div className="ss-survivor-universe">
      {onBack && (
        <button onClick={onBack} className="ss-back-button" style={{ position: "absolute", top: "20px", left: "30px", zIndex: 20 }}>
          <ArrowLeft size={14} /> BACK
        </button>
      )}

      <div className="ss-header">
        <div className="ss-header-content">
          <div className="ss-header-badge">FICTIONAL UNIVERSE</div>
          <h2>{novelUniverse.title}</h2>
          <p className="ss-header-subtitle">{novelUniverse.tagline}</p>
          <div className="ss-header-meta">
            <div className="ss-status-pill"><span>●</span> {novelUniverse.status}</div>
            <div className="ss-genres">
              {novelUniverse.genres?.slice(0, 4).map((genre) => (
                <div key={genre} className="ss-genre-tag">{genre}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ss-nav-container">
        <div className="ss-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`ss-nav-tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ss-content-wrapper">
        <div className="ss-music-player">
          <Volume2 size={20} className="ss-music-icon" />
          <div className="ss-music-info">
            <b>Background Music</b>
            <small>Atmospheric soundtrack</small>
          </div>
          <div className="ss-music-controls">
            <button onClick={() => setMusicOn((value) => !value)} title={musicOn ? "Pause" : "Play"}>
              {musicOn ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button onClick={() => setVolume((value) => (value === 0 ? 0.45 : 0))} title="Mute">
              {volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              title="Volume"
            />
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}
