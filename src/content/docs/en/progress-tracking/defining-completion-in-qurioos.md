---
title: "Defining completion in Qurioos"
description: "Completion in Qurioos tracks progress from each Step up to the full Subject, and only resets if the content structure changes."
category: "progress-tracking"
---

### Understanding completion in Qurioos

Completion in Qurioos reflects how far a user has progressed through a learning experience, from individual Steps to the entire Subject. It’s designed to give both users and admins a clear picture of progress, while ensuring fairness when content changes.

### How completion is calculated

Completion is calculated **separately at each level** of the content hierarchy:

- **Step** → The smallest learning unit.
- **Module** → Contains multiple Steps. Completion is based on how many Steps are finished.
- **Path** → Contains one or multiple Modules. Completion is based on how many Modules are completed.
- **Level** → Contains one or multiple Paths. Completion is based on how many Paths are completed.
- **Subject** → Contains one or multiple Levels. Completion is based on how many Levels are completed.

Each level’s completion percentage is **rolled up** to the one above it.

### Independent completion status

Once something is marked as **Completed**, it stays completed, even if new content is added to it, unless the structure changes in a way that affects the completion logic.

This means users won’t lose their “Completed” status just because a Step is edited or updated with new text, images, or a quiz.

### Content updates and progress resets

If the **structure** of the content changes, meaning the number of Steps, Modules, Paths, or Levels inside a Subject changes, then progress for all users in that Subject is reset to **0%**. This ensures that everyone experiences the updated learning experience from the start.

**Note:** Qurioos does not currently have content versioning. We track the last update date and the user who made the change. Only specific roles, like **Admins**, can update content.

### Examples

**Example 1 — No reset**

- Module **“Getting started with Stripe”** has 5 Steps.
- A user completes all 5 → Module shows **100% completed**.
- An Admin edits one Step to add a quiz.
- **Result:** Structure hasn’t changed (still 5 Steps). Learner keeps their **Completed** status.

**Example 2 — Reset**

- Path **“Stripe for Developers”** has 3 Modules.
- A user completes all 3 → Path, Level, and Subject show **100% completion**.
- An Admin adds a new Module **“Advanced API Integrations.”**
- **Result:** Structure has changed (now 4 instead of 3 Modules). User progress resets to **0%** for the Subject.
