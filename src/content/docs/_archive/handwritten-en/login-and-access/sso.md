---
title: Single Sign-On (SSO)
description: Let users sign in with Google or Microsoft instead of a magic link.
---

Qurioos supports social login via **Google** and **Microsoft** in addition to the default magic link (email OTP). Admins can enable or disable each provider per account under **Settings → Authentication**.

### Magic link (always available)

Magic link is Qurioos's default authentication method and cannot be disabled. When a user enters their email, Qurioos sends a one-time sign-in link. No password required.

### Google login

When enabled, users see a **Sign in with Google** button on the login page. Qurioos uses a shared Google OAuth application — no Google Workspace setup is needed on your end.

**To enable Google login:**

1. Go to **Settings → Authentication**
2. Toggle **Google login** on
3. Click **Save**

### Microsoft login (Azure AD)

Microsoft login connects to your organization's **Azure Active Directory** tenant. This is useful for corporate academies where employees already use Microsoft 365.

**To enable Microsoft login:**

1. Go to **Settings → Authentication**
2. Toggle **Microsoft login** on
3. Click **Save**
4. Contact **support@qurioos.com** to provide your Azure AD tenant configuration

**Need to know**

- Users signing in via Google or Microsoft for the first time may be prompted to complete their profile before accessing the account.
- Social login and magic link can be active simultaneously — users choose their preferred method.
- Disabling a provider logs out any sessions established through that provider.
