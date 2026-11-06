---
title: "装上这个主题"
date: 2026-11-03T10:00:00+08:00
description: "加到一个现成的 Hugo 博客里，改两行配置就能预览。"
tags: ["Hugo", "教程", "Chipaper"]
---

需要 Hugo **0.158.0** 或更新的版本。这个演示站用 Extended **0.161.1** 编出来。

## 加到现有博客

在博客根目录：

```bash
git submodule add https://github.com/chius-me/chipaper.git themes/chipaper
```

`hugo.toml` 里写上：

```toml
theme = "chipaper"
hasCJKLanguage = true

[outputs]
  home = ["HTML", "RSS", "JSON"]

[markup.highlight]
  noClasses = false

[params.chipaper]
  greeting = "你好，我是阿某"
  motto = "平时写的东西放这儿。"
```

仓库里的 `exampleSite/hugo.toml` 是一份全的，导航、标签、归档和社交链接都在。

## 写一篇

```bash
hugo new content posts/my-first-post.md
```

Markdown 和 front matter 跟 Hugo 一样。正文里有 `##`、`###`，目录就会出现。首页摘要先用 `description`，没写就取第一段。

## 本地看

```bash
hugo server --disableFastRender
```

要发布的时候再跑一次 `hugo --minify`。

## 以后更新

```bash
git submodule update --remote themes/chipaper
```

本地看过，再把新的 submodule 指针提交进博客仓库。

[配置的细节在仓库文档里 →](https://github.com/chius-me/chipaper)
