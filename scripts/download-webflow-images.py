#!/usr/bin/env python3
"""Download every Webflow-CDN image referenced in the content collections,
store it locally under public/images/webflow/, and rewrite all references in
the content files to point at the local copy.

Why: the imported blog/technique/help content currently hotlinks images on
Webflow's CDN (cdn.prod.website-files.com). That CDN dies when the old Webflow
site is torn down. Running this once makes every image a repo asset served from
our own domain, so nothing breaks when Webflow goes away.

Safe to re-run: already-downloaded files are skipped, and a URL that has already
been rewritten to /images/webflow/... is simply not matched again.

Usage:  python3 scripts/download-webflow-images.py
"""
import os, re, sys, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "src", "content")
OUTDIR = os.path.join(ROOT, "public", "images", "webflow")
PUBLIC_PREFIX = "/images/webflow"

# Match a Webflow CDN URL up to (and including) a known image extension, so a
# trailing markdown ")" or quote is never swallowed. Parentheses inside the
# filename (e.g. "...Group 6 (1).png") are preserved.
URL_RE = re.compile(
    r"https://[^\s\"'<>]*?website-files\.com[^\s\"'<>]*?\.(?:png|jpe?g|svg|webp|gif|avif)",
    re.IGNORECASE,
)

def slugify_asset(url: str) -> str:
    """Last path segment -> decoded, hyphenated, extension-preserving filename.
    Keeps Webflow's leading hash so names stay globally unique."""
    name = urllib.parse.unquote(url.rsplit("/", 1)[-1])
    root, ext = os.path.splitext(name)
    root = re.sub(r"[^a-zA-Z0-9]+", "-", root).strip("-").lower()
    return f"{root}{ext.lower()}"

def collect_files():
    for dirpath, _, files in os.walk(CONTENT):
        if os.sep + "_archive" in dirpath:
            continue
        for fn in files:
            if fn.endswith((".md", ".mdx")):
                yield os.path.join(dirpath, fn)

def main():
    os.makedirs(OUTDIR, exist_ok=True)
    files = list(collect_files())

    # 1. Gather every distinct URL across all content files.
    urls = set()
    for path in files:
        with open(path) as f:
            urls.update(URL_RE.findall(f.read()))
    print(f"Found {len(urls)} distinct Webflow image URLs in {len(files)} files.")

    # 2. Download each once; build url -> local public path mapping.
    mapping, failed = {}, []
    for i, url in enumerate(sorted(urls), 1):
        local_name = slugify_asset(url)
        dest = os.path.join(OUTDIR, local_name)
        public_path = f"{PUBLIC_PREFIX}/{local_name}"
        mapping[url] = public_path
        if os.path.exists(dest) and os.path.getsize(dest) > 0:
            print(f"  [{i}/{len(urls)}] skip (have)  {local_name}")
            continue
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
            with open(dest, "wb") as out:
                out.write(data)
            print(f"  [{i}/{len(urls)}] saved {len(data):>7}B  {local_name}")
        except Exception as e:  # keep going; report at the end
            failed.append((url, str(e)))
            del mapping[url]
            print(f"  [{i}/{len(urls)}] FAIL  {url} -> {e}")

    # 3. Rewrite references in every content file (longest URLs first so no
    #    partial-overlap corruption).
    rewritten = 0
    for path in files:
        with open(path) as f:
            text = f.read()
        new = text
        for url in sorted(mapping, key=len, reverse=True):
            new = new.replace(url, mapping[url])
        if new != text:
            with open(path, "w") as f:
                f.write(new)
            rewritten += 1
    print(f"\nDownloaded {len(mapping)} images, rewrote {rewritten} files.")
    if failed:
        print(f"{len(failed)} FAILED (left pointing at original URL):")
        for url, err in failed:
            print(f"  - {url}  ({err})")
        sys.exit(1)

if __name__ == "__main__":
    main()
