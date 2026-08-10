PERSONAL MEDIA FOLDER

Put your personal photos and videos in this folder.

Recommended:
- profile.jpg  -> profile picture
- family-01.jpg
- volleyball.jpg
- graduation.jpg
- work-day.mp4

Then edit:
src/data/media.js

Example:
{
  type: "image",
  title: "My Photo",
  src: "/media/family-01.jpg",
  date: "2026-08-02",
  description: "A personal memory."
}

Images and videos are automatically cropped to fit their frames using object-fit: cover.
