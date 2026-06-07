---
title: Custom Domain
description: Connect your own domain to your Qurioos account.
---

By default, your account is available at `yourslug.qurioos.com`. On the **Pro** plan and above, you can connect a custom domain so users access it at `learn.yourcompany.com` or any domain you own.

### How to connect a custom domain

1. Go to **Settings → Domain**
2. Enter your custom domain (e.g., `learn.yourcompany.com`)
3. Click **Save**

When you save, Qurioos automatically updates the authentication redirect allowlist to include your new domain. This ensures magic link and OAuth logins continue to work correctly.

### DNS configuration (required)

You must configure DNS yourself. Add a **CNAME record** pointing your custom domain to your Vercel deployment URL. This step is done in your domain registrar or DNS provider, not in Qurioos.

You also need to add the custom domain in your **Vercel project** under the Domains tab.

### Verifying the connection

After DNS propagation (usually a few minutes to a few hours), your account will be accessible at your custom domain. The default `yourslug.qurioos.com` URL continues to work as a fallback.

**Need to know**

- Custom domains are available on **Pro** plan and above.
- Qurioos does not manage DNS. Your IT team or registrar handles this step.
- HTTPS is automatically provisioned by Vercel once the domain is connected.
- If users experience login issues after switching domains, clear browser cookies and try again.
