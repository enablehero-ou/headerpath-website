---
title: Automatic RTL Direction
description: Qurioos automatically applies right-to-left layout when Hebrew is active.
---

When a user's active locale is **Hebrew**, Qurioos automatically switches the entire user UI to right-to-left (RTL) layout. No configuration is needed — it happens automatically.

### What changes in RTL mode

- Text direction is reversed across all pages
- Navigation elements and buttons mirror horizontally
- The content page sidebar and step content align to the right
- Form inputs and labels render right-aligned

### How RTL is triggered

RTL activates when:

- The user explicitly selects Hebrew as their language
- The user's browser sends a Hebrew Accept-Language header
- The account's primary locale is Hebrew

The layout switches back to LTR automatically when any non-RTL locale is active.

### Enabling Hebrew for your account

1. Go to **Settings → Languages**
2. Click **Add language**
3. Select **Hebrew**
4. Translate your content into Hebrew from the content editor

**Need to know**

- RTL applies to the user-facing account only. The admin panel is always LTR.
- Images, videos, and uploaded media are not mirrored. Only UI layout and text direction change.
- If your content includes directional icons or arrows in images, consider creating locale-specific versions.
