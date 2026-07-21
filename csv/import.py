#!/usr/bin/env python3
"""One-off importer: Webflow CSV exports -> Astro content collections.
Blog (published only) -> src/content/blog/en/<slug>.md
Techniques           -> src/content/techniques/en/<slug>.md
Help articles        -> src/content/docs/en/<category>/<slug>.md
"""
import csv, json, os, re
from datetime import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSVDIR = os.path.join(ROOT, "csv")
from markdownify import markdownify as md

def find(name):
    for f in os.listdir(CSVDIR):
        if name in f and f.endswith(".csv"):
            return os.path.join(CSVDIR, f)
    raise FileNotFoundError(name)

def y(v):  # yaml-safe scalar via json (valid YAML double-quoted)
    return json.dumps(v if v is not None else "", ensure_ascii=False)

def parse_date(s):
    s = (s or "").strip()
    if not s:
        return None
    m = re.match(r"^[A-Za-z]{3} ([A-Za-z]{3}) (\d{2}) (\d{4})", s)
    if m:
        try:
            return datetime.strptime(" ".join(m.groups()), "%b %d %Y").strftime("%Y-%m-%d")
        except ValueError:
            pass
    return None

def clean_html(h):
    h = h or ""
    h = re.sub(r'\sid=""', "", h)               # strip empty Webflow ids
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", h, flags=re.S | re.I)
    return h

def to_md(h):
    body = md(clean_html(h), heading_style="ATX", bullets="-", strip=["span"])
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return body

def prettify_author(slug):
    slug = (slug or "").strip()
    if not slug:
        return "Qurioos Team"
    return " ".join(p.capitalize() for p in re.split(r"[-_]", slug))

def norm_blog_cat(c):
    c = (c or "").strip().lower()
    if c.startswith("tutorials"):
        return "tutorials"
    return c or "strategy"

def write(path, fm_lines, body):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write("---\n" + "\n".join(fm_lines) + "\n---\n\n" + body + "\n")

# ---------- BLOG (published only) ----------
n = 0
with open(find("[Blog] posts")) as f:
    for x in csv.DictReader(f):
        if x.get("Draft", "").lower() == "true":
            continue
        slug = x["Slug"].strip()
        date = parse_date(x.get("Published On")) or parse_date(x.get("Created On")) or "2025-01-01"
        fm = [
            f"title: {y(x['Title'].strip())}",
            f"description: {y((x.get('Subtitle') or x.get('Key takeaway') or x['Title']).strip())}",
            f"date: {date}",
            f"author: {y(prettify_author(x.get('Author')))}",
            f"category: {y(norm_blog_cat(x.get('Blog post category')))}",
        ]
        og = (x.get("OpenGraph") or "").strip()
        if og.startswith("http"):
            fm.append(f"image: {y(og)}")
        write(os.path.join(ROOT, "src/content/blog/en", slug + ".md"), fm, to_md(x.get("Body", "")))
        n += 1
print(f"blog: {n}")

# ---------- TECHNIQUES ----------
n = 0
with open(find("Techniques")) as f:
    for x in csv.DictReader(f):
        if x.get("Draft", "").lower() == "true":
            continue
        slug = x["Slug"].strip()
        fm = [
            f"title: {y(x['Name'].strip())}",
            f"description: {y((x.get('Description') or x['Name']).strip())}",
        ]
        bf = (x.get("Best for") or "").strip()
        if bf:
            fm.append(f"bestFor: {y(bf)}")
        img = (x.get("Image") or "").strip()
        if img.startswith("http"):
            fm.append(f"image: {y(img)}")
        order = (x.get("Order") or "").strip()
        if order.isdigit():
            fm.append(f"order: {order}")
        write(os.path.join(ROOT, "src/content/techniques/en", slug + ".md"), fm, to_md(x.get("Steps", "")))
        n += 1
print(f"techniques: {n}")

# ---------- HELP / DOCS ----------
n = 0
with open(find("Help articles")) as f:
    for x in csv.DictReader(f):
        if x.get("Draft", "").lower() == "true":
            continue
        slug = x["Slug"].strip()
        cat = (x.get("Doc Category") or "uncategorized").strip() or "uncategorized"
        fm = [
            f"title: {y(x['Title'].strip())}",
            f"description: {y((x.get('Subtitle') or x['Title']).strip())}",
            f"category: {y(cat)}",
        ]
        write(os.path.join(ROOT, "src/content/docs/en", cat, slug + ".md"), fm, to_md(x.get("Body (Rich text)", "")))
        n += 1
print(f"docs: {n}")
