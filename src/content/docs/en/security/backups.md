---
title: "Backup & recovery policy"
description: "Daily automated backups ensure that all Qurioos account data is safe and can be restored in case of issues, with an additional off-site copy for disaster recovery."
category: "security"
---

### ‍**How backups work**

Qurioos uses a two-layer backup system to keep data safe:

### **1. Operational backups (Railway)**

- Daily full backups — The database is backed up every 24 hours.
- Point-in-Time Recovery (PITR) — Data can be restored to any specific minute within the last 7 days.
- Use case — Ideal for quick recovery from everyday issues like accidental deletions or incorrect imports.

### **2. Disaster recovery backups (Amazon Web Services S3)**

- Daily off-site backups — A full compressed copy of the database is stored securely in a private AWS S3 bucket.
- Independent storage — This copy is separate from the main platform, protecting against service-wide outages or security breaches.
- Use case — Critical when the primary database platform is unavailable or compromised.

### **Backup frequency**

- Every 24 hours for both operational and off-site backups.
- Off-site backups are never more than 24 hours old.

### **Why this matters**

- Protects against both small mistakes and large-scale disasters.
- Follows the 3-2-1 backup strategy: 3 copies of data, 2 types of storage, 1 off-site location.
