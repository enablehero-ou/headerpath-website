---
title: "Progress tracking overview"
description: "How progress is tracked and completed in HeaderPath from individual Steps to full Subjects and Certifications."
category: "progress-tracking"
---

### How progress tracking works in HeaderPath

HeaderPath tracks user progress at every level of your content hierarchy, from the smallest unit (a Step) all the way up to Levels and Certifications. This gives users a clear view of where they are, and helps admins measure engagement and results.

Progress is **calculated separately** at each level and then rolled up to the levels above it. Learn [how the Completion status works](/help/defining-completion-in-headerpath).

### Steps – one small piece of learning

A Step is the smallest unit of learning.

- The user either completes it or not, there’s no partial completion.
- It can contain text, videos, quizzes, or other interactive activities.
- The system records the date and time a Step is completed.

**Example**: A user answers a quiz question. Once the user selects an option on the quiz, the Step is marked complete, and the user clicks Continue to proceed to the next Step.

**Technical note**: Step completion is stored as boolean (true/false). Quiz Steps track correct/incorrect results per question. Completion timestamp is stored in UTC (hh:mm).

### Modules – a set of Steps on the same topic

A Module groups related Steps together.

- Progress shows how many Steps the user has completed out of the total.
- A Module is marked complete when the user finishes all its Steps.
- If more Steps are added later, the “Completed” status remains.

**Example**: The “Getting started with Stripe” Module has 10 Steps. When a user completes all 10, the Module is marked complete.

**Technical note**: Module progress is `(Completed Steps ÷ Total Steps) × 100`. Completion timestamp is recorded when progress reaches 100%.

### Paths – grouping Modules by focus

A Path contains several Modules.

- Progress is based on all Steps in all its Modules.
- The Path is complete when the user finishes every Step in every Module.

**Example**: The “Stripe for Developers” Path has 3 Modules. Completing all 3 Modules completes the Path.

**Technical note**: Path progress is `(Completed Steps in all Modules ÷ Total Steps in all Modules) × 100`. Completion timestamp is stored at 100% progress.

### Levels – bigger sections of learning

A Level contains one or more Paths.

- Progress adds up all Steps from all its Paths.
- The Level is complete when the user finishes all Steps in all its Paths.

**Example**: The “Intermediate Sales” Level includes the “Sales for B2B” and “Sales for B2C” Paths. Completing both Paths completes the Level.

**Technical note**: Level progress is `(Completed Steps in all Paths ÷ Total Steps in all Paths) × 100`. Completion timestamp is recorded at 100% progress.

### Subjects – the whole learning experience

A Subject is the top container for all learning content.

- Progress is calculated from all Levels in the Subject.
- The Subject is complete when the user finishes all Steps in all Levels.

**Example**: The “Introduction to Sales” Subject includes Beginner, Intermediate, and Advanced Levels. Completing all three Levels completes the Subject.

**Technical note**: Subject progress is `(Completed Steps in all Levels ÷ Total Steps in all Levels) × 100`. Completion timestamp is recorded at 100% progress.

### Certifications – awards for finishing

A Level can have a Certification linked to it.

- A Certification is awarded when the user completes the Level and meets quiz score requirements.
- The date of award is recorded.

**Example**: A “Platinum Partner” Certification requires completing the Platinum Level and scoring at least 80% on all quizzes.

**Technical note**: Certification eligibility checks for Level completion flag = true **and** quiz score ≥ threshold. Expiry date is stored if applicable.

### Content updates and progress resets

- HeaderPath doesn’t store old versions of content, only the most recent version is shown.
- Updates can only be made by Admins.
- If the structure changes (Steps, Modules, Paths, or Levels are added or removed), all user progress remains but gets recalculated based on the new number of Steps.

**Example**: Adding a new Module to the “Stripe for Developers” Path will update all user progress in the *Learn Stripe* Subject as now they need to complete more Steps to get to 100%.

**Technical note**: No versioning. Update logs include `updated_at` (UTC). Structure changes trigger a reclaculation of all progress entries for that Subject.
