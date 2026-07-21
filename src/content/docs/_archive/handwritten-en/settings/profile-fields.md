---
title: Profile Fields
description: Customize what information users provide when they sign up or update their profile.
---

Profile fields let you collect additional information from users beyond their name and email. Configure them under **Settings → Profile fields**.

### System fields

Qurioos includes two built-in system fields:

- **First name**
- **Last name**

Each can be set to **Required** or **Optional**. When required, users must fill them in at signup or before accessing the account.

### Custom fields

You can add your own fields to collect any information your account needs — department, job title, employee ID, and more.

**Supported field types:**

| Type | Use for |
|------|---------|
| **Text** | Short free-form input |
| **Email** | Email address with format validation |
| **Phone** | Phone number |
| **URL** | Web address with format validation |
| **Date** | Date picker |
| **Dropdown** | Select from a predefined list of options |
| **Checkbox** | True/false toggle |

### How to add a custom field

1. Go to **Settings → Profile fields**
2. Click **Add field**
3. Enter a field key (used internally), label (shown to users), and type
4. Set whether the field is required or optional
5. For dropdown fields, add the list of options
6. Click **Save**

Custom fields support per-locale label translations if your account has multiple languages enabled.

**Need to know**

- Custom field values are visible on each user's detail page in the admin panel.
- Deleting a custom field removes it from all user profiles permanently.
