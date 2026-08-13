export const notes = [
  {
    id: 1,
    title: "Personal Philosophy",
    date: "2022-12-10",
    category: "Personal",
    content: "Past is past. Learn from experiences, keep things simple, move forward, and make every choice count. Safety First."
  },
  {
    id: 2,
    title: "Career Direction",
    date: "2025-02-22",
    category: "Career",
    content: "Finish BSIT, improve technical skills, gain experience, and eventually build a stable career in the technology industry."
  },
  {
    id: "rizal-review-er",
    title: "Rizal Review",
    description: "Review material for Rizal studies.",
    category: "Rizal",
    type: "PDF",
    file: "/media/notes/rizal/rizal-review-er.pdf"
  },
  {
    id: "first-week-gen-ed-handouts",
    title: "First Week General Education Handouts",
    description: "Merged handouts for General Education.",
    category: "General Education",
    type: "PDF",
    file: "/media/notes/general-education/first-week-gen-ed-handouts.pdf"
  },
  // Add PDF notes with: type: "PDF", description, and file: "/media/notes/category/filename.pdf".
  // Static PDFs belong in public/media/notes so Vite serves them at /media/notes/...
];
