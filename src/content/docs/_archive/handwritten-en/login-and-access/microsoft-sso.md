---
title: Microsoft Azure AD SSO Setup
description: Configure Microsoft Azure Active Directory login for your Qurioos account.
---

Qurioos supports **Microsoft Azure Active Directory (Azure AD)** as a login option for users. This allows employees in your organization to sign in with their existing Microsoft 365 credentials.

### Before you start

You'll need:

- Access to your organization's **Azure Active Directory** in the Microsoft Azure portal
- Admin rights to register an application in Azure AD
- Your Qurioos account URL (e.g., `learn.yourcompany.com` or `yourslug.qurioos.com`)

### Step 1: Register an app in Azure AD

1. Sign in to the [Azure portal ↗](https://portal.azure.com)
2. Go to **Azure Active Directory → App registrations**
3. Click **New registration**
4. Enter a name (e.g., *Qurioos Account*)
5. Under **Supported account types**, select the appropriate option for your organization
6. Under **Redirect URI**, select **Web** and enter: `https://auth.qurioos.com/auth/v1/callback`
7. Click **Register**

### Step 2: Get your app credentials

From the app registration, copy:
- **Application (client) ID**
- **Directory (tenant) ID**

Create a **Client secret** under **Certificates & secrets → New client secret**. Copy the secret value immediately — it won't be shown again.

### Step 3: Send credentials to Qurioos

Email **support@qurioos.com** with:
- Your Application (client) ID
- Your Directory (tenant) ID
- Your Client secret
- Your account URL

The Qurioos team will configure Microsoft login for your account and confirm when it's active.

### Step 4: Enable Microsoft login

1. Go to **Settings → Authentication**
2. Toggle **Microsoft login** on
3. Click **Save**

**Need to know**

- The redirect URI must be exactly `https://auth.qurioos.com/auth/v1/callback`. Using your custom domain URL here will not work.
- Client secrets expire. Set a reminder to rotate your secret before it expires and send the updated value to **support@qurioos.com**.
