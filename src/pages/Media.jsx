import { useMemo, useState } from "react";
import { Upload, Image as ImageIcon, Video, Images, Trash2 } from "lucide-react";
import { mediaItems } from "../data/media";
import SectionTitle from "../components/SectionTitle";

export default function Media() {
  const [localMedia, setLocalMedia] = useState([]);
  const [filter, setFilter] = useState("all");

  const allMedia = [...mediaItems, ...localMedia];

  const visible = useMemo(
    () => allMedia.filter(item => filter === "all" || item.type === filter),
    [allMedia, filter]
  );

  const handleFiles = (event) => {
    const files = [...event.target.files];

    const previews = files
      .filter(file => file.type.startsWith("image/") || file.type.startsWith("video/"))
      .map(file => ({
        type: file.type.startsWith("video/") ? "video" : "image",
        title: file.name,
        date: "Local preview",
        src: URL.createObjectURL(file),
        local: true
      }));

    setLocalMedia(current => [...current, ...previews]);
    event.target.value = "";
  };

  const removeLocal = (src) => {
    URL.revokeObjectURL(src);
    setLocalMedia(current => current.filter(item => item.src !== src));
  };

  return (
    <div>
      <SectionTitle
        eyebrow="MEDIA"
        title="Photos & Videos"
        description="A dedicated place for your personal photos, videos, profile media and highlights."
      />

      <section className="media-upload glass-card">
        <div className="media-upload-icon"><Upload size={28} /></div>
        <div>
          <span className="eyebrow">ADD YOUR MEDIA</span>
          <h2>Drop your photos and videos here</h2>
          <p>
            Select multiple files for a temporary preview. For permanent project media,
            place the files in <code>public/media</code> and register them in <code>src/data/media.js</code>.
          </p>
        </div>

        <label className="primary-button upload-label">
          <Upload size={16} />
          Choose Photos / Videos
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFiles}
            hidden
          />
        </label>
      </section>

      <div className="media-controls">
        <button className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>
          <Images size={15} /> All
        </button>
        <button className={filter === "image" ? "selected" : ""} onClick={() => setFilter("image")}>
          <ImageIcon size={15} /> Photos
        </button>
        <button className={filter === "video" ? "selected" : ""} onClick={() => setFilter("video")}>
          <Video size={15} /> Videos
        </button>
      </div>

      {visible.length ? (
        <div className="media-grid">
          {visible.map(item => (
            <article className="glass-card media-card" key={`${item.src}-${item.title}`}>
              <div className="media-frame">
                {item.type === "video" ? (
                  <video src={item.src} controls />
                ) : (
                  <img src={item.src} alt={item.title} />
                )}
              </div>

              <div className="media-caption">
                <div>
                  <b>{item.title}</b>
                  <span>{item.date}</span>
                </div>

                {item.local && (
                  <button className="icon-button" onClick={() => removeLocal(item.src)} title="Remove preview">
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="glass-card media-empty large">
          <Images size={42} />
          <h2>Your personal gallery starts here</h2>
          <p>
            This highlighted area is where you can add your photos and videos.
            The media frame automatically uses <b>object-fit: cover</b> so your images fit cleanly.
          </p>
        </div>
      )}
    </div>
  );
}
