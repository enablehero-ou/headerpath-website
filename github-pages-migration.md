# GitHub Pages Migration — qurioos.com

Steps to move qurioos.com off Loveable and onto GitHub Pages (free static hosting), based on how enablehero.com was set up.

## 1. Create the GitHub repository

- Create a new **public** repository named `qurioos.github.io` under the `qurioos-v0` org
- The name must follow the pattern `<org-name>.github.io`

## 2. Enable GitHub Pages

- Repo → **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `main`, folder: `/ (root)`
- Save

## 3. Add the CNAME file

- Create a file named `CNAME` (no extension) at the repo root
- Its only content: `qurioos.com`

## 4. Configure DNS at the registrar

Add four **A records** for the apex domain (`@`):

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Add a **CNAME record**: `www` → `qurioos.github.io`

DNS propagation: minutes to a few hours.

## 5. Enforce HTTPS

- **Settings → Pages** → tick **Enforce HTTPS** once GitHub detects the DNS
- GitHub provisions a free Let's Encrypt cert automatically

## 6. Create index.html

- A single `index.html` at the repo root is all that's needed — no build step, no framework
- Export/copy the HTML and CSS from Loveable, paste into `index.html`, push to `main`
- Reference: `enablehero.github.io` repo — 66-line pure HTML + inline CSS, no external dependencies

## 7. Deploy

- Every push to `main` goes live in 30–60 seconds
- Cancel the Loveable subscription once DNS is pointed and the page is confirmed live

## Cost

- GitHub Pages: free for public repos
- SSL cert: free via Let's Encrypt (GitHub handles it)
- Only ongoing cost: domain registration
