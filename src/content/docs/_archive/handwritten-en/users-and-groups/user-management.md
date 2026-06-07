---
title: User Management
description: Manage users, roles, and access in your Qurioos account.
---

All user management happens under **Admin → Users**. You can invite, edit, deactivate, and export users from this section.

### User lifecycle

Users move through three states:

- **Invited** — sent an invitation but hasn't signed in yet
- **Active** — account is active and the user can sign in
- **Inactive** — account is deactivated; the user cannot sign in

### Roles

| Role | Admin panel | Content | Users | Settings |
|------|-------------|---------|-------|----------|
| Superadmin | ✓ | ✓ | ✓ | ✓ |
| Admin | ✓ | ✓ | ✓ | ✓ |
| Manager | ✓ | ✓ | Partial | ✗ |
| Creator | ✓ | Create/Edit/Delete | ✗ | ✗ |
| Editor | ✓ | Edit only | ✗ | ✗ |
| User | ✗ | View only | ✗ | ✗ |

Managers can manage Creators, Editors, and Users but not Admins.

### User detail page

Click any user to open their detail page, which shows:
- Profile information and role
- Group memberships
- Per-content page progress (completion %, quiz accuracy, status)
- Certifications earned
- Activity log for that user

### Access requests

If your account uses **Login only** mode with **Request access** enabled, visitors can submit a request to join. Review and approve or deny requests from **Admin → Users → Access requests**.

### CSV export

Export all users — including role, status, and last login — from **Admin → Users → Export CSV**. Available on Starter plan and above.

**Need to know**

- Deleting a user removes their membership and all progress data permanently. Deactivation is reversible; deletion is not.
- Group managers have limited admin access scoped to their groups. See the [Groups](/articles/admin-guide/groups) article for details.
