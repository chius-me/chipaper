---
title: "A first look"
date: 2026-11-05T10:00:00+08:00
description: "The first post on the demo site. Start reading or switch between light and dark mode in the top right."
tags: ["Chipaper", "Hugo", "Notes"]
---

This is the Chipaper demo. The home page opens with a short introduction, followed by posts ordered by date. Use the moon or sun in the top right to switch between light and dark mode.

Use the language menu in the header to open this same post in Simplified or Traditional Chinese.

As the site grows, you can still find older posts in the archives and browse them by tag.

Chinese and English often appear in the same sentence, whether you're running Hugo in a HomeLab, deploying with GitHub Actions, or looking up a log entry in the terminal. The theme pairs Google Sans Code with Sarasa Mono SC, with line spacing tuned for Chinese and line breaks that work on narrow screens.

## What a post looks like

Put a Markdown file in `content/posts/`, give it a title and a date, then start Hugo to see the post.

```yaml
---
title: "What I tinkered with today"
date: 2026-11-05T12:00:00+08:00
tags: ["Daily life", "Development"]
---
```

See the [typography sample]({{< relref path="/posts/typography" lang="zh" >}}) and the [setup guide]({{< relref path="/posts/getting-started" lang="zh" >}}) for more. Both are in Simplified Chinese.
