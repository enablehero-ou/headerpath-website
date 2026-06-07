---
title: How Completion Is Calculated
description: Understand how Qurioos determines when a user has completed a content page.
---

Qurioos calculates completion separately for **step progress** and **quiz accuracy**. Both can play a role in whether a user qualifies for a certificate.

### Step completion

A user's completion percentage is calculated as:

> **Steps visited ÷ Total steps × 100**

A step is counted as visited when the user navigates to it. Completion is tracked per page per user.

### Certification thresholds

When a page has certification enabled, two thresholds apply:

- **Completion threshold** — the minimum step completion percentage required (e.g., 80% of steps must be visited)
- **Quiz accuracy threshold** — the minimum percentage of quiz questions the user must answer correctly

Both thresholds must be met for a certificate to be issued. If your page has no quiz steps, the quiz accuracy threshold is ignored.

### Example

*A page has 10 steps and 4 quiz questions. The completion threshold is 90% and quiz accuracy threshold is 75%.*

*A user visits 9 of 10 steps (90% ✓) and answers 3 of 4 quiz questions correctly (75% ✓). They earn the certificate.*

*Another user visits all 10 steps (100% ✓) but answers only 2 of 4 quiz questions correctly (50% ✗). They do not earn the certificate.*

### Retakes

If **Allow retry** is enabled on the page's certification settings, users can retake the page to try again. Each attempt is tracked separately up to the **Max attempts** limit.

**Need to know**

- Changing thresholds after users have already completed a page does not retroactively affect existing certificates or progress records.
