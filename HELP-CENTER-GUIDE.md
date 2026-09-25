# Help Center Guide

The single source of truth for writing articles in `src/content/docs/en/`.
Read this before creating or editing any help-center article, from either repo.

---

## 🔴 NEVER mention superadmin

The `superadmin` role must **never** appear in any customer-facing surface — not in a
help-center article, not in marketing copy, not in an example, not in a screenshot, not
in a role list, not in a parenthetical aside. It does not exist as far as the outside
world is concerned.

When an article needs to talk about roles, the roles are **admin**, **manager** and
**learner**. If a capability is superadmin-only, either describe it without naming a
role ("available on request", "contact support") or leave it out entirely.

This applies to every synonym and spelling: `superadmin`, `super admin`, `super-admin`,
"platform operator", "our internal admin account". No exceptions, no workarounds.

---

## What these articles are for

Help-center articles are **conversion and customer-education assets**, not technical
documentation. Every article exists to help someone get value out of HeaderPath so they
become — or stay — a paying customer.

Write for the person trying to accomplish something, not the person trying to understand
the system.

**Do write:**
- What the feature lets them achieve, in outcome terms
- The shortest path to doing it
- What good looks like when it works
- Why they'd want it, in a sentence, at the top

**Do not write:**
- How it works under the hood — architecture, data flow, caching, queues, jobs
- Why it was built that way, trade-offs, or design rationale
- Internal names for things: tables, columns, env vars, functions, endpoints, services
- Limits and edge cases that only matter to engineers
- Anything that reads like a changelog or release note

If a sentence would only make sense to someone who has seen the codebase, cut it.

---

## 🔴 NEVER write articles for

- **Open project-board tasks** — forward-looking work is not a feature yet
- **Handoff documents** — internal session state, never customer-facing
- **Features in progress** — if it is not live for customers, it does not get an article
- **Anything internal-facing** — ops runbooks, migration notes, admin tooling, internal roles
- **Retired or replaced features** — do not explain what we used to offer, do not write
  "previously this worked differently", do not leave migration notes for old behaviour

The help center describes **what exists today**, for customers, and nothing else. When a
feature is removed, delete its article — do not annotate it as deprecated.

---

## Voice

- Second person. "You" and "your academy", never "the user" or "the tenant".
- Active and present. "Your learners see their certificate" beats "certificates will be
  displayed to learners".
- Benefit before mechanic. Lead with what they get, then how to get it.
- Confident, not hedged. No "simply", "just", "easy" — those are dismissive when it
  isn't.
- Product-voiced and self-serve, matching the positioning rule in `CLAUDE.md`: HeaderPath
  is software they use, not a service we perform for them.

## Shape

Keep articles short. An admin scanning for an answer should find it without scrolling
past context they didn't ask for.

1. One or two sentences on what this lets them do and why it matters
2. Numbered steps for the task, if there is a task
3. A short "Good to know" only if something would genuinely surprise them

Use headings that match what someone would search for. Screenshots are welcome; diagrams
of internal flows are not.

## Frontmatter

Every article needs `title`, `description` and `category`. `category` must equal the
folder name exactly. Copy the shape from a sibling file in the same folder.

File names are kebab-case: `roles-and-permissions.md`.

`src/content/docs/_archive/` is old handwritten material — read-only, never edit.
