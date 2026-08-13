# Media audit

Audited against the current `public/media` directory and the React data files.

| Referenced asset | Actual location | Result |
| --- | --- | --- |
| `/media/Video1.mp4` | `public/media/Video1.mp4` | Working |
| `/media/vid1.mp4` | No matching file; `v.mp4` exists | Fixed to `/media/v.mp4` |
| `/media/vid2.mp4` | No matching file; `v2.mp4` exists | Fixed to `/media/v2.mp4` |
| `/media/pic*.jpg`, `/media/best*.jpg`, `/media/profile.jpg` | Matching files in `public/media` | Working |
| `/media/stories/ss-survivor-cover.png` | Matching file | Working |
| `/media/stories/ohye.jpg` | Matching file | Working |
| `/media/stories/survivor-record-cover.jpg` | No matching file; `Aethris.png` exists | Fixed to `/media/stories/Aethris.png` |
| `/media/stories/ss-survivor-scene.jpg` | No matching file | Removed the unused chapter media reference |
| SS Survivor theme | `public/media/music/His Angels x Order 66 March  INTENSE EPIC VERSION  Warhammer 40k x Star Wars.mp3` | Fixed the missing spaces in the URL |
| Past Is Past theme | `public/media/music/逆時針向 - Asphyxia (AlexDy Remix).mp3` | Exists; music data is normalized by the player |

`Aethris.png`, `ChatGPT Image Apr 27, 2026, 04_27_28 PM.png`, and `Most Epic Music Ever_ _The Wolf And The Moon_ by BrunuhVille ( 128kbps ).mp3` are in `public/media` but currently have no data reference.

No PDF currently exists in the repository. The Notes viewer is ready for PDFs placed beneath `public/media/notes`.
