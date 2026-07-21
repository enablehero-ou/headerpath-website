---
title: "Control YouTube recommended videos"
description: "Limit YouTube’s end-of-video suggestions to your own channel by adding rel=0 to your embed code."
category: "create-content"
---

### Embedding YouTube videos without unrelated recommendations

When you embed a YouTube video anywhere, YouTube normally shows “related videos” at the end of the video. By default, these recommendations can include videos from other channels.

To keep learners focused on your own content, you can limit related videos to your **channel only** by adding the `rel=0` parameter to your embed code.

### How it works

- `rel=0` tells YouTube to only show related videos from the same channel as the embedded video.
- This doesn’t completely remove related videos — it simply limits them to your channel.
- To make the most of this, host all your training videos on the same YouTube channel.

### Example embed code

**When you copy YouTube’s embed code, it will look something like this:`‍`**

`<iframe width="560" height="315"`

`src="https://www.youtube.com/embed/VIDEO_ID"`

`frameborder="0" allowfullscreen></iframe>`

**To limit recommendations:**`‍`

`<iframe width="560" height="315"`

`src="https://www.youtube.com/embed/VIDEO_ID?rel=0"`

`frameborder="0" allowfullscreen></iframe>`

### Best practices

- **Use one dedicated channel** for all your learning-related videos.
- Add `?rel=0` to every embedded video URL.
- Double-check each video’s embed code before adding it to HeaderPath.
