---
title: Podcast Steps
description: Add audio-first content to your content pages with Podcast steps.
---

**Podcast steps** let you deliver page content as audio. Users hear the content through a built-in audio player, with the option to follow along with a synchronized transcript.

### When to use Podcast steps

Podcast steps are ideal for:

- Content that benefits from a human voice (coaching, storytelling, leadership messages)
- Users who prefer audio over reading
- Supplementing text content with a recorded explanation or interview

### How to add a Podcast step

1. Open a page in the content editor
2. Click **Add step** and select **Podcast**
3. Upload an audio file
4. Add an optional heading and body text
5. Upload a **WebVTT caption file** for the read-along transcript (optional but recommended)
6. Click **Save**

### Read-along transcript

When a WebVTT caption file is provided, Qurioos displays a synchronized transcript beneath the audio player. The active line highlights as the audio plays, making it easier for users to follow along.

WebVTT is a standard caption format supported by most recording and editing tools.

### Step options

Like other step types, Podcast steps support:

- **Labels** — badge shown on the step (e.g., *Listen*, *Reflection*)
- **Callouts** — highlighted info box
- **Resources** — downloadable files or links attached to the step

**Need to know**

- Audio files are stored in private Supabase storage. Playback uses a signed URL that expires automatically.
- There is no automatic transcription — you must provide the WebVTT file if you want a synchronized transcript.
