---
title: Data Backups
description: How Qurioos backs up your account data.
---

Qurioos automatically backs up your account's database every day. Backups are managed at the infrastructure level — no configuration is required on your part.

### Backup schedule

- **Full database backup** — every 24 hours
- **Point-in-time recovery** — Supabase Pro plan supports restoring data to any specific minute within the backup retention window

### What is backed up

The backup covers all account data stored in the Qurioos database, including:

- All users and memberships
- All content (pages, steps, translations)
- All progress and certification records
- All settings and configuration
- Activity logs

Media files (uploaded images, videos, audio) are stored in Supabase Storage and are covered by the same backup infrastructure.

### Requesting a restore

Qurioos manages restores directly. If you need to restore data due to accidental deletion or data corruption:

1. Contact **support@qurioos.com** as soon as possible
2. Describe what was lost and approximately when it happened
3. The Qurioos team will coordinate the restore with you

**Need to know**

- Backups are managed by the Qurioos team. You do not have direct access to backup files.
- Point-in-time recovery means individual records (e.g., a deleted user) can often be restored without rolling back the entire database.
- Backup retention follows Supabase Pro plan terms. Contact **support@qurioos.com** for specifics.
