---
title: Feature Flags
description: How to enable or disable features for a specific account.
---

Not every feature in Qurioos is available to every account by default. Feature flags let you turn individual capabilities on or off per account — giving you precise control over what each account can access, regardless of their plan.

### Managing feature flags

Feature flags are only visible and editable by **superadmins**. To access them:

1. Go to **Settings → Features**
2. Toggle any feature on or off using the switch next to it
3. Changes take effect immediately — no save button required

### What each flag controls

**AI content generation** — Enables AI-assisted course creation. When on, the option to create content using AI appears in the **Content** section. When off, all content must be created manually.

**Processes** — Enables the Processes module, including SOPs, runs, assignments, and scheduling. When off, the **Processes** section is hidden entirely from the admin panel.

### How flags interact with roles

Enabling a feature for an account doesn't grant access to all users on that account. Each feature still respects the existing role permissions. For example, AI content generation is available only to superadmins even when the flag is on — enabling the flag is a prerequisite, not a bypass of role restrictions.

**Need to know**

- Feature flags are per-account. Enabling a feature for one account has no effect on others.
- Disabling a feature hides it from the interface but does not delete any existing data — processes, AI-generated content, and runs are preserved.
- New accounts start with all features disabled. Enable the ones relevant to each account after setup.
