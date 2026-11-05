---
title: "开始使用 Chipaper"
date: 2026-11-03T10:00:00+08:00
description: "安装主题、复制示例配置，并用你自己的文章启动一个 Hugo 博客。"
tags: ["Hugo", "教程", "Chipaper"]
---

Chipaper 需要 Hugo **0.158.0 或更新版本**；这个演示站使用 Hugo Extended **0.161.1** 构建。普通构建不需要 Node.js、npm 或 Python。

## 给现有博客安装主题

在 Hugo 博客的根目录执行：

```bash
git submodule add https://github.com/chius-me/chipaper.git themes/chipaper
```

然后在 Hugo 配置中启用主题：

```toml
theme = "chipaper"
hasCJKLanguage = true

[outputs]
  home = ["HTML", "RSS", "JSON"]

[markup.highlight]
  noClasses = false

[params.chipaper]
  greeting = "Hello, I'm Chius"
  motto = "Write about the things you care about."
```

完整示例在仓库的 `exampleSite/hugo.toml`，包含导航、标签、归档和社交链接。

## 创建文章

```bash
hugo new content posts/my-first-post.md
```

文章支持 Hugo 标准的 Markdown 和 front matter。要显示目录，正文中使用 `##`、`###` 等标题即可。首页优先显示文章的 `description`，没有设置时使用正文的第一个段落。

## 本地预览

```bash
hugo server --disableFastRender
```

发布之前再运行一次 `hugo --minify`，检查生成结果。

## 更新主题

```bash
git submodule update --remote themes/chipaper
```

更新后检查本地预览，再把新的 submodule 提交记录提交到博客仓库。

[查看完整文档与配置说明 →](https://github.com/chius-me/chipaper)
