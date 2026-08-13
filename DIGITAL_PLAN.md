# James Klyde Honor — Digital Plan

This redesign turns the portfolio into a personal digital world.

## Implemented
- Activities -> Stories
- Story filters and story reader
- Story chapters
- Story image/video media support
- Optional story-specific background music
- Local comment UI for development/demo
- Account Vault -> Connected Accounts
- Removed credential storage from the frontend
- Removed Finance, Expenses and Reports from navigation/routes
- Light / Dark / System theme controls
- Theme preference saved in localStorage
- Privacy guidance for public frontend data

## Important comment-system note
The current comment UI stores comments in the visitor's browser using localStorage. That means comments are NOT shared between different visitors yet.

For real public comments, connect this UI to a backend/database such as Supabase, Firebase, or a small serverless API. Do not put database service-role keys or private credentials in frontend code.

## Story media
Put story media in:
- public/media/stories/
- public/media/music/

Only use media you own or have permission to publish.
