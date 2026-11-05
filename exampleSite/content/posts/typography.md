---
title: "中文、English 与代码：一页排版样张"
date: 2026-11-04T10:00:00+08:00
description: "看看中文长段落、英文、链接、列表、引用、表格和代码在同一页里的表现。"
tags: ["排版", "中文", "Markdown"]
---

写博客时，我们会在一句话里自然地切换语言：今天给 HomeLab 更新了 Debian 13，顺手把 Hugo 的构建流程放进 GitHub Actions，然后泡一杯茶，继续写这篇文章。

## 字体与中英混排

English text uses Google Sans Code. 中文使用更纱等宽黑体。数字 `0123456789`、标点「」『』，以及名称 Kubernetes、TypeScript、Proxmox VE 都应该清楚、自然地出现在正文中。

字体不需要喧宾夺主。阅读一段较长的中文时，段落之间有足够的呼吸空间，行与行之间不会挤在一起；当屏幕变窄，文字会自然换行，页面不会跟着长网址或代码向右溢出。

**粗体用于强调**，*斜体用于补充语气*，而[链接](https://gohugo.io/)保留清楚的下划线。

### 列表

- 留白服务于阅读。
- 导航让人知道自己在哪里。
- 中英文可以出现在同一条列表里。

1. 写下一个想法。
2. 保存 Markdown。
3. 让 Hugo 生成静态页面。

### 引用

> 我们所度过的每个平凡的日常，也许就是连续发生的奇迹。
>
> The ordinary days that we live in may, in fact, be a series of miracles.

## 代码

行内代码可以这样写：`hugo server --disableFastRender`。

```bash
# 构建你的博客
hugo --minify

# 启动本地预览
hugo server --disableFastRender
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, 世界。")
}
```

```typescript
type Post = { title: string; tags: string[] };

const post: Post = {
  title: "写点东西吧",
  tags: ["Hugo", "中文排版"],
};

console.log(post);
```

代码块可以横向滚动，也可以点击右上角复制。

## 表格

| 场景 | 字体 | 说明 |
| --- | --- | --- |
| English & numbers | Google Sans Code | 等宽、清楚的拉丁字形 |
| 中文 | Sarasa Mono SC | 简洁的黑体，与代码字体协调 |
| 小屏幕 | 相同字体 | 调整行距与字号，保持阅读节奏 |

---

这就是一页常见的 Markdown 内容。
