---
title: Cookie Consent and Privacy
description: Configure how your account handles cookie consent and analytics loading.
---

Qurioos includes a built-in cookie consent banner that prevents analytics tools from loading until a user gives explicit consent. Configure this under **Settings → Privacy**.

### The cookie consent banner

When enabled, users see a consent prompt on their first visit. Analytics tools — including Vercel Analytics and Sentry — only activate after the user accepts. This helps you comply with GDPR and similar privacy regulations.

### How to enable the consent banner

1. Go to **Settings → Privacy**
2. Toggle **Cookie consent banner** on
3. Click **Save**

The banner appears automatically on the user-facing account. Users who decline or dismiss it are not tracked.

### Custom consent script

If your organization uses its own Consent Management Platform (CMP) — such as OneTrust, Cookiebot, or a custom solution — you can replace the built-in Qurioos banner with your own script.

1. Go to **Settings → Privacy**
2. Paste your CMP script into **Custom consent script**
3. Click **Save**

When a custom script is provided, the built-in Qurioos banner is disabled and your script controls consent behavior instead.

**Need to know**

- If the cookie consent banner is disabled, analytics tools load immediately for all visitors.
- The consent state is stored in a browser cookie. Users who clear their cookies will see the consent prompt again on their next visit.
- The admin panel is not affected by the user consent setting.
