---
title: How Login Works
description: Qurioos uses passwordless authentication — users sign in with a magic link or social login.
---

Qurioos uses **passwordless authentication**. There are no passwords to remember, reset, or manage. Every user and admin signs in using one of the available methods.

### Magic link (email)

Magic link is always available and requires no setup. When a user enters their email address on the login page, Qurioos sends a one-time sign-in link to that address. Clicking the link signs them in — no password needed.

### Social login

Admins can enable Google and Microsoft login under **Settings → Authentication**. When enabled, users see a "Sign in with Google" or "Sign in with Microsoft" button on the login page.

Google login uses a shared Qurioos OAuth application. Microsoft login can be configured with your organization's Azure AD tenant.

### How to enable or disable login methods

1. Go to **Settings → Authentication**
2. Toggle **Google login** or **Microsoft login** on or off
3. Click **Save**

Magic link cannot be disabled — it is always available as a fallback.

### Session behavior

Each user can have one active session per account at a time. Signing in on a new device automatically ends the previous session. This applies to all roles, including admins.

**Need to know**

- Users signing in for the first time via social login may be asked to complete their profile before accessing the account.
- Email delivery for magic links depends on your configured from-address. Set this under **Settings → Account**.
