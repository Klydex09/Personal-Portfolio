import { useMemo, useState } from "react";
import { Download, Eye, FileText, RefreshCw, X } from "lucide-react";
import { notes } from "../data/notes";
import SectionTitle from "../components/SectionTitle";

export default function Notes() {
  const [query, setQuery] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [viewerKey, setViewerKey] = useState(0);
  const [previewFailed, setPreviewFailed] = useState(false);
  const filtered = useMemo(() => notes.filter(n => `${n.title} ${n.category} ${n.description || n.content || ""}`.toLowerCase().includes(query.toLowerCase())), [query]);

  const openPdf = note => {
    setPreviewFailed(false);
    setViewerKey(key => key + 1);
    setSelectedPdf(note);
  };

  const closePdf = () => setSelectedPdf(null);

  return <div><SectionTitle eyebrow="PERSONAL" title="Notes" description="Personal notes and PDF study materials." />
    <input className="search-input" placeholder="Search notes..." value={query} onChange={e => setQuery(e.target.value)} />
    <div className="card-grid">{filtered.map(n => <article className="glass-card note-card" key={n.id}>
      <span className="eyebrow">{n.category}</span><h3>{n.title}</h3>{n.date ? <small>{n.date}</small> : null}
      <p>{n.description || n.content}</p>
      {n.type === "PDF" && n.file ? <div className="note-actions">
        <button className="primary-button" type="button" onClick={() => openPdf(n)} aria-label={`View PDF: ${n.title}`}><Eye size={16} /> View PDF</button>
        <a className="secondary-button" href={n.file} download aria-label={`Download PDF: ${n.title}`}><Download size={16} /> Download PDF</a>
      </div> : null}
    </article>)}</div>

    {selectedPdf ? <div className="pdf-viewer-backdrop" role="presentation" onMouseDown={closePdf}>
      <section className="pdf-viewer" role="dialog" aria-modal="true" aria-labelledby="pdf-viewer-title" onMouseDown={event => event.stopPropagation()}>
        <header className="pdf-viewer-header">
          <div><span className="eyebrow">PDF NOTE</span><h2 id="pdf-viewer-title"><FileText size={22} /> {selectedPdf.title}</h2></div>
          <button className="icon-button" type="button" onClick={closePdf} aria-label="Close PDF viewer"><X size={20} /></button>
        </header>
        <div className="pdf-viewer-body">
          {previewFailed ? <div className="pdf-error"><FileText size={34} /><h3>Unable to preview this PDF.</h3><p>Please try again or download the file to read it locally.</p><div className="note-actions"><button className="primary-button" type="button" onClick={() => { setPreviewFailed(false); setViewerKey(key => key + 1); }}><RefreshCw size={16} /> Try Again</button><a className="secondary-button" href={selectedPdf.file} download><Download size={16} /> Download PDF</a></div></div> : <iframe key={viewerKey} src={selectedPdf.file} title={selectedPdf.title} className="pdf-frame" onError={() => setPreviewFailed(true)} />}
        </div>
        <footer className="pdf-viewer-footer"><a className="secondary-button" href={selectedPdf.file} download aria-label={`Download ${selectedPdf.title}`}><Download size={16} /> Download PDF</a></footer>
      </section>
    </div> : null}
  </div>;
}
