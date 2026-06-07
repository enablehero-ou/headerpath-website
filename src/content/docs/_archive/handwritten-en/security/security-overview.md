---
title: Security Overview
description: How Qurioos protects your account and your users' data.
---

Qurioos is built with security as a foundation, not an afterthought. Here's what's in place to protect your account.

### Authentication security

- **Passwordless** — Qurioos uses magic link (email OTP) and OAuth. There are no passwords to steal or guess.
- **Single-session enforcement** — each user can have only one active session per account at a time. A new login automatically ends the previous session.
- **Rate limiting** — all authentication endpoints are rate-limited to prevent brute-force attempts.

### Authorization

- **Role-based access control (RBAC)** — six roles (Superadmin, Admin, Manager, Creator, Editor, User) with strict permission enforcement on every API route and admin page.
- **Group-based content access** — pages can be restricted to specific groups, enforced at the database level.
- **Row-level security** — all tenant data is isolated at the database level using Supabase Row Level Security.

### Data protection

- **Input validation** — all API routes validate input using Zod. Malformed or unexpected data is rejected before processing.
- **Security headers** — all responses include `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `HSTS`, and `Permissions-Policy` headers.
- **Content Security Policy (CSP)** — enforced on all pages to prevent cross-site scripting.
- **Daily backups** — your database is backed up automatically every 24 hours. See [Data Backups](/articles/admin-guide/data-backups).

### Privacy

- **Cookie consent** — analytics tools (Vercel Analytics, Sentry) only load after a user consents. Configure this under **Settings → Privacy**.

**Need to know**

- To report a security concern, email **support@qurioos.com**.
