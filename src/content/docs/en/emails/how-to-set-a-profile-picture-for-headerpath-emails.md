---
title: "How to set a profile picture for HeaderPath emails"
description: "When learners sign up for your academy or receive system emails, you want them to see your company's logo for a professional, branded experience. This guide explains how to make that happen for both email sending options available on HeaderPath."
category: "emails"
---

### Understanding your email options

HeaderPath offers two ways to send system emails (like signup confirmations and password resets):

![Example of email with and without brand icon](/images/webflow/690b8de906242e250d950709-scrnli-ohvfw9wl5ak19i.png)

**Option 1: Standard System Email** (All plans)

- Uses a generated address: `company-name@learningnotifications.com`
- Monitored service for security
- Optimized for high-volume deliverability
- Requires manual setup for logo display

**Option 2: Custom System Email** (Custom plans only)

- Uses your own subdomain, for example: `mail@academy.yourcompany.com`
- Automatically displays your logo
- Provides stronger brand consistency
- Has the option of using the globally accepted BIMI (Brand Indicators for Message Identification) that shows a ✅ verified icon next to the sender email addressto increase security, like this:

![Email verification example when setting up BIMI (Brand Indicators for Message Identification)](/images/webflow/690c29d9a64e9814b8337da1-bimi-example.avif)

## Setting up your logo for Standard System Emails

Since `learningnotifications.com` is a shared domain across multiple HeaderPath accounts, we we're not able to configure logos centrally. However, you can implement a workaround that makes your logo appear in Gmail, Yahoo, Outlook, Apple, and email clients using Gravatar.

### Method: Link your logo through a Google Account

This method takes advantage of how Gmail displays sender images based on Google account profiles.

**Step 1: Prepare a Google Account**

You can either use an existing Google account or create a new one specifically for this purpose.

**Step 2: Access Your Google Account Settings**

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Sign in with your Google account
3. Click **"Personal info"** in the left sidebar

**Step 3: Add Your HeaderPath System Email as an Alternative Email**

1. Scroll to the **"Contact info"** section
2. Click on **Email**
3. Select **"Add alternative email"**
4. Enter your full HeaderPath system email: `your-company-name@learningnotifications.com`
5. Google will send a verification email to this address (which forwards to your primary inbox)
6. Click the verification link in the email to confirm

**Step 4: Upload Your Logo**

1. Return to your Google account homepage
2. Click your profile picture in the top-right corner
3. Click the camera or pencil icon that appears
4. Upload your company logo (square images work best, at least 400x400 pixels)
5. Adjust the crop if needed and click **"Save as profile picture"**

**Step 5: Wait for Propagation**

Allow 2-6 hours for the change to propagate across email systems. Some clients may cache images longer.

### Important notes

- **Coverage**: This method primarily works for recipients using Gmail or Google Workspace email accounts
- **Other Email Clients**: Recipients using Outlook, Apple Mail, or other providers may not see the logo through this method. If you want to ensure everybody sees your logo, you need to repeat the above on an Outlook, Yahoo, and Apple Mail account.
- **Verification**: Test by sending a system email to a Gmail address you control

## Setting up Custom Branded Email (Custom plans)

If your HeaderPath account is on a custom plan, you can use a custom email domain that provides better logo support across all email clients.

### What you'll need

- The subdomain dedicated to your HeaderPath accoint (e.g., `academy.yourcompany.com`)
- Access to your domain's DNS settings
- Email authentication records (SPF, DKIM, DMARC)

### Setup process

1. Contact HeaderPath support to enable custom email domain functionality
2. Follow the DNS configuration guide provided to authenticate your sending domain
3. Configure BIMI (Brand Indicators for Message Identification) if you want verified logo display in supporting email clients (this has an additional cost)
4. Test deliverability and logo display across different email providers

### Benefits of Custom Domain Email

- Your logo displays more consistently across email clients
- Stronger brand recognition and trust
- Better email deliverability for your specific domain
- Full control over email reputation

## Best practices

**For Logo Images**:

- Use a square image (1:1 aspect ratio)
- Minimum 400x400 pixels, recommended 1000x1000 pixels
- Clear, simple design that's recognizable at small sizes
- PNG or JPEG format

**For testing**:

- Send test emails to multiple email providers (Gmail, Outlook, Yahoo, Apple Mail)
- Check on both desktop and mobile clients
- Ask team members with different email providers to verify

## Troubleshooting

**Logo not appearing after 6+ hours?**

- Check the spelling of the email address you added on Google and the other services
- Verify the alternative email was properly added and confirmed in the accounts you setup
- Verify the user account photo viewing permission is set to public
- Clear your browser cache and check again
- Try viewing from an incognito/private browsing window

**Recipients still not seeing the logo?**

- Confirm they're using a Gmail account or Outlook, Yahoo, Apple Mail, if you've setup those accounts too.
- Consider upgrading to a custom plan with custom email domain for broader compatibility
