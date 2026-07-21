---
title: "Google reCAPTCHA v3 on signup"
description: "Our signup and password flows are quietly protected by Google reCAPTCHA v3 to keep your account safe from bots and abuse."
category: "security"
---

### Addition of Google reCAPTCHA v3

We’ve integrated [Google reCAPTCHA v3 ↗](https://cloud.google.com/security/products/recaptcha) into HeaderPath to help protect your account from spam and automated abuse while keeping the signup experience smooth and frictionless.

### What is Google reCAPTCHA v3 and why we use it

Google reCAPTCHA v3 runs silently in the background and analyzes user activity to determine whether it’s legitimate—without forcing users to solve puzzles or click checkboxes.

**This helps HeaderPath:**

- Detect bots or abusive behavior early
- Prevent spammy signups or malicious activity
- Keep user experience simple and seamless

### Where reCAPTCHA applies

- **Signup page**: we use it during account creation to flag potential spam or malicious signups
- **Forgot password flows**: reCAPTCHA helps verify that the request is likely from a real user

The key thing to note: reCAPTCHA runs invisibly. If a user is flagged as suspicious, they might be prompted with an additional verification step (e.g., confirming via email).

### Need to know

- **No action required**: users don’t need to solve puzzles or click anything.
- **Protected by design**: this feature enhances account security without adding friction.
- **Invisible unless needed**: only users who appear suspicious might see an additional challenge.
