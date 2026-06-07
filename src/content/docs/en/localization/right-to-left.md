---
title: "Right to Left (RTL) languages"
description: "Qurioos makes it easy to deliver a seamless learning experience in Hebrew and Arabic, with built-in Right-to-Left (RTL) support and smart handling of mixed content."
category: "localization"
---

### Automatic RTL direction

When your course content is set to Hebrew or Arabic, Qurioos automatically applies `dir="rtl"` at the correct container level. This ensures:

- **Correct punctuation placement** on the right side of words
- **Proper alignment and reading order** according to Hebrew/Arabic conventions

### Smart handling of mixed RTL and English/numbers

Many courses mix Hebrew or Arabic with **English words, URLs, or numbers**. Qurioos detects these automatically and wraps them with `dir="ltr"` so they display correctly.

**Example:** `לחץ על www.example.com להמשך` is displayed correctly, without punctuation flipping sides.

### Fixed spacing with non-breaking spaces

Spaces next to punctuation are automatically converted to **non-breaking spaces (`&nbsp;`)**, preventing them from jumping to the wrong side.

**Example:** שלום, איך אתה? will always keep the comma next to the first word.

### Invisible direction control marks

Qurioos inserts **Left-to-Right Mark (LRM)** and **Right-to-Left Mark (RLM)** characters when needed.

- They’re invisible to learners
- They prevent punctuation from attaching to the wrong text segment
- They ensure stable rendering in all browsers

### Consistent display in all browsers

Our RTL engine is tested on:

- Chrome (Windows/Mac)
- Firefox
- Safari (Mac/iOS)

This ensures identical display across platforms, even in tricky cases like Hebrew text followed by English filenames or bracketed expressions.
