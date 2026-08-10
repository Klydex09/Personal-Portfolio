# Personal Life OS

A frontend-only React + Vite personal dashboard for James Klyde N. Honor.

## Requirements
- Node.js LTS
- VS Code

## Install
Open this folder in VS Code, then open Terminal:

```bash
npm install
npm run dev
```

Open the local address shown by Vite, usually:
http://localhost:5173

## Build
```bash
npm run build
```

## Lint
```bash
npm run lint
```

## Where to edit your information

All personal information is in `src/data/`.

- `profile.js` — name, bio, education, work, motto
- `education.js` — school and subjects
- `work.js` — Concentrix role and hours
- `skills.js` — skills and percentages
- `hobbies.js` — hobbies/interests
- `schedule.js` — weekly schedule
- `schoolSchedule.js` — school schedule
- `workSchedule.js` — work schedule
- `expenses.js` — budget and expenses
- `notes.js` — notes
- `tasks.js` — tasks
- `activities.js` — timeline
- `goals.js` — goals
- `projects.js` — projects
- `accounts.js` — DEMO placeholders only

## Important
This application has:
- no database
- no backend
- no Supabase
- no Firebase
- no real authentication
- no server-side storage

Do not place real passwords, API keys, tokens, or other secrets in the frontend source.

## Suggested development order
1. Run the project.
2. Edit the data files.
3. Confirm the dashboard.
4. Update school/work schedule with exact times when available.
5. Replace sample expenses/tasks/notes.
6. Add your real project descriptions and screenshots if desired.
7. Run `npm run build` before deployment.

## VS Code tip
Use the Explorer panel to open `src/data/profile.js`, `src/data/schedule.js`, etc. Most future changes can be made there without touching the React components.


## Enhanced Personal Life OS

### Media
Place personal photos/videos in `public/media`.
- `profile.jpg` is used as the profile picture.
- Add gallery entries in `src/data/media.js`.
- The Media Gallery also has a temporary browser preview uploader.

### Account Vault
The Account Vault now has a password gate using a SHA-256 comparison and a browser-session lock.
This is only a frontend privacy gate. It is **not** a replacement for real backend authentication.

### Location
The About Me page contains an interactive OpenStreetMap view centered on the general Bulacao area. It intentionally uses an area-level location rather than an exact home marker.

### Schedule
The dashboard and calendar show a live clock with seconds and automatically highlight the current schedule item.

### Navigation
The desktop sidebar can collapse/expand with a sliding animation. The sidebar is scrollable when there are many sections. Mobile/tablet layouts use a slide-out navigation drawer.

### Responsive design
The UI includes responsive breakpoints for desktop, tablets, Android phones and iPhone-sized screens.
