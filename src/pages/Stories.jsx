import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Image as ImageIcon, MessageCircle, Pause, Play, Send, Volume2, VolumeX } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import NovelUniverse from "../components/NovelUniverse";
import { stories } from "../data/stories";
import { survivorRecord } from "../data/survivorRecord";

const allStories = [...stories, survivorRecord];
const COMMENTS_KEY = "james-portfolio-story-comments";

function loadComments() {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY) || "{}");
  } catch {
    return {};
  }
}

export default function Stories() {
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("All");
  const [comments, setComments] = useState(loadComments);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [expandedHighlight, setExpandedHighlight] = useState(null);
  const audioRef = useRef(null);

  const selectedStory = allStories.find(story => story.id === selectedId) || null;
  const selectedStoryMusic = typeof selectedStory?.music === "string"
    ? { title: "Story soundtrack", src: selectedStory.music }
    : selectedStory?.music;

  const types = useMemo(
    () => ["All", ...new Set(allStories.map(story => story.type))],
    []
  );

  const filteredStories = filter === "All"
    ? allStories
    : allStories.filter(story => story.type === filter);

  useEffect(() => {
    setChapterIndex(0);
    setPlaying(false);
    setExpandedHighlight(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [selectedId]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggleMusic = async () => {
    if (!audioRef.current || !selectedStoryMusic?.src) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const addComment = event => {
    event.preventDefault();
    const cleanName = name.trim() || "Guest";
    const cleanComment = comment.trim();
    if (!cleanComment || !selectedStory) return;

    const next = {
      ...comments,
      [selectedStory.id]: [
        ...(comments[selectedStory.id] || []),
        {
          id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
          name: cleanName,
          text: cleanComment,
          date: new Date().toISOString()
        }
      ]
    };

    setComments(next);
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(next));
    setComment("");
  };

  if (selectedStory) {
    if (selectedStory.id === "ss-survivor") {
      return (
        <div className="story-reader">
          <button className="back-button" onClick={() => setSelectedId(null)}>
            <ArrowLeft size={17} /> Back to Stories
          </button>
          <NovelUniverse music={selectedStory.music} />
        </div>
      );
    }

    const chapter = selectedStory.chapters[chapterIndex];
    return (
      <div className="story-reader">
        <button className="back-button" onClick={() => setSelectedId(null)}>
          <ArrowLeft size={17} /> Back to Stories
        </button>

        <section className="story-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.9), rgba(0,0,0,.35)), url(${selectedStory.cover})` }}>
          <div>
            <span className="eyebrow">{selectedStory.type} • {selectedStory.year}</span>
            <h2>{selectedStory.title}</h2>
            <p>{selectedStory.description}</p>
          </div>
        </section>

        {selectedStory.highlights ? (
          <section className="story-highlights">
            <h3>Key People & Lessons</h3>
            <div className="highlights-grid">
              {selectedStory.highlights.map(item => (
                <button
                  key={item.person}
                  className={`highlight-card glass-card ${expandedHighlight === item.person ? "expanded" : ""}`}
                  onClick={() => setExpandedHighlight(expandedHighlight === item.person ? null : item.person)}
                  type="button"
                >
                  <div className="highlight-header">
                    <strong>{item.person}</strong>
                    <span className="highlight-role">{item.role}</span>
                  </div>
                  {expandedHighlight === item.person && (
                    <p className="highlight-lesson">{item.lesson}</p>
                  )}
                </button>
              ))}
            </div>
          </section>
        ) : null}

        {selectedStoryMusic ? (
          <div className="story-music glass-card">
            <audio ref={audioRef} src={selectedStoryMusic.src} onEnded={() => setPlaying(false)} />
            <div className="music-copy">
              <Volume2 size={18} />
              <span><b>{selectedStoryMusic.title}</b><small>Story background music</small></span>
            </div>
            <button className="icon-button" onClick={toggleMusic} aria-label={playing ? "Pause music" : "Play music"}>
              {playing ? <Pause size={17} /> : <Play size={17} />}
            </button>
            <input aria-label="Music volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={e => setVolume(Number(e.target.value))} />
            <button className="icon-button" onClick={() => setVolume(volume === 0 ? 0.45 : 0)} aria-label="Mute music">
              {volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
          </div>
        ) : null}

        <article className="story-content glass-card">
          <div className="story-chapter-heading">
            <span className="eyebrow">CHAPTER {chapterIndex + 1}</span>
            <h3>{chapter.title}</h3>
          </div>

          {chapter.content.map((paragraph, index) => <p key={`${paragraph}-${index}`}>{paragraph}</p>)}

          {chapter.media?.map((media, index) => (
            <figure className="story-media" key={`${media.src}-${index}`}>
              {media.type === "video" ? (
                <video controls src={media.src} />
              ) : (
                <img src={media.src} alt={media.caption || "Story scene"} />
              )}
              {media.caption ? <figcaption>{media.caption}</figcaption> : null}
            </figure>
          ))}

          {selectedStory.chapters.length > 1 ? (
            <div className="chapter-controls">
              <button className="secondary-button" disabled={chapterIndex === 0} onClick={() => setChapterIndex(i => i - 1)}>
                <ChevronLeft size={16} /> Previous
              </button>
              <span>{chapterIndex + 1} / {selectedStory.chapters.length}</span>
              <button className="secondary-button" disabled={chapterIndex === selectedStory.chapters.length - 1} onClick={() => setChapterIndex(i => i + 1)}>
                Next <ChevronRight size={16} />
              </button>
            </div>
          ) : null}
        </article>

        <section className="comments-section glass-card">
          <div className="comments-heading">
            <MessageCircle size={19} />
            <div>
              <h3>Comments</h3>
              <span>{(comments[selectedStory.id] || []).length} comment(s)</span>
            </div>
          </div>

          <form className="comment-form" onSubmit={addComment}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Display name (optional)" maxLength={40} />
            <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Share your thoughts..." maxLength={500} rows={4} />
            <button className="primary-button" type="submit"><Send size={15} /> Post Comment</button>
          </form>

          <div className="comment-list">
            {(comments[selectedStory.id] || []).map(item => (
              <div className="comment-card" key={item.id}>
                <strong>{item.name}</strong>
                <small>{new Date(item.date).toLocaleString()}</small>
                <p>{item.text}</p>
              </div>
            ))}
            {!comments[selectedStory.id]?.length ? <p className="muted">No comments yet. Be the first to leave one.</p> : null}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        eyebrow="PERSONAL"
        title="Stories"
        description="A living archive of James Klyde Honor's life stories, fictional worlds, scenes and creative writing."
      />

      <div className="story-filters">
        {types.map(type => (
          <button key={type} className={`filter-chip ${filter === type ? "active" : ""}`} onClick={() => setFilter(type)}>
            {type}
          </button>
        ))}
      </div>

      <div className="story-grid">
        {filteredStories.map(story => (
          <button className="story-card glass-card" key={story.id} onClick={() => setSelectedId(story.id)}>
            <div className="story-cover" style={{ backgroundImage: `url(${story.cover})` }}>
              <span>{story.type}</span>
            </div>
            <div className="story-card-body">
              <div>
                <span className="eyebrow">{story.year}</span>
                <h3>{story.title}</h3>
              </div>
              <p>{story.description}</p>
              <div className="story-card-footer">
                <span><BookOpen size={14} /> {story.chapters.length} chapter{story.chapters.length === 1 ? "" : "s"}</span>
                <span><ImageIcon size={14} /> Media ready</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="story-note glass-card">
        <BookOpen size={18} />
        <div>
          <strong>Your creative archive</strong>
          <p>Add photos, drawings, videos, chapter music and more by editing <code>src/data/stories.js</code> and placing media inside <code>public/media</code>.</p>
        </div>
      </div>
    </div>
  );
}
