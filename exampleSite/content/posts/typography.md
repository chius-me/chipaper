---
title: "中文、English，还有代码"
date: 2026-11-04T10:00:00+08:00
description: "同一页里的长段落、链接、列表、引用、表格和代码。"
tags: ["排版", "中文", "Markdown"]
---

写着写着就会换语言。今天给 HomeLab 更新了 Debian 13，把 Hugo 的构建放进 GitHub Actions，然后泡一杯茶，继续写。

## 混在一起的时候

English text uses Google Sans Code. 中文用更纱等宽黑体。数字 `0123456789`、标点「」『』，还有 Kubernetes、TypeScript、Proxmox VE 这些名字，就放在句子里。

这段故意写长一点。行和行之间留了空，屏幕变窄时文字换行。长链接和代码块自己横向滚，页面不会被撑到右边去。

**粗体是强调**，*斜体是补一句*，[链接](https://gohugo.io/)带下划线。

### 列表

- 一条普通的中文。
- A list item in English, in the same list.
- 再来一条，里面有 HomeLab 和 Debian。

1. 先记下来。
2. 存成 Markdown。
3. 跑一次 Hugo。

### 引用

> 我们所度过的每个平凡的日常，也许就是连续发生的奇迹。
>
> The ordinary days that we live in may, in fact, be a series of miracles.

## 代码

行内可以写 `hugo server --disableFastRender`。

```bash
# 构建你的博客
hugo --minify

# 本地预览
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

代码块可以横向滚动，右上角能复制。

## 表格

| 场景 | 字体 | 说明 |
| --- | --- | --- |
| English、数字 | Google Sans Code | 拉丁字母和数字 |
| 中文 | Sarasa Mono SC | 黑体，跟代码字放一起 |
| 窄屏 | 同一套 | 字号和行距收一收 |
