---
title: "Set robots.txt rules"
description: "Request changes to your robots.txt file by emailing support, and we’ll update it for you anytime."
category: "hosting-domains"
---

### About robots.txt

A **robots.txt** file tells search engine bots (also called crawlers or spiders) which parts of your site they should or shouldn’t access. It’s commonly used to stop search engines from indexing certain pages or folders.

### How it works in HeaderPath

In HeaderPath, if you want to add or update rules:

1. Email **support@headerpath.com** with your request.
2. Include the exact rules you’d like added or removed.
3. Our team will make the changes for you.

You can update your robots.txt at any time by sending a new request.

### Important notes

- Your robots.txt file is **publicly visible** at: `yourdomain.com/robots.txt`‍
- Do not use it to hide sensitive information, it only tells compliant bots what not to crawl.
- Some bots ignore robots.txt rules, especially malicious ones.
- You can include a link to your sitemap in your robots.txt to help search engines discover your content.

### **Example requests**

**Block all bots from your entire site:**

`User-agent: *  
Disallow: /`

**Block all bots from a specific URL (e.g., `/secret-page`):**

`User-agent: *  
Disallow: /secret-page  
Allow: /`
