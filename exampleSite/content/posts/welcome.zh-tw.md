---
title: "先看一眼"
date: 2026-11-05T10:00:00+08:00
description: "示範站的第一篇文章。打開就能閱讀，右上角可以切換淺色和深色。"
tags: ["Chipaper", "Hugo", "隨筆"]
---

這是 Chipaper 的示範站。首頁先放一段介紹，接著依時間排列文章。點右上角的月亮或太陽，可以切換淺色和深色模式。

點頁首的語言選單，就能直接切到這篇文章的簡體中文或英文版。

文章多了以後，彙整和標籤還在原來的地方。

中文和英文常常出現在同一句裡。例如在 HomeLab 裡跑 Hugo、用 GitHub Actions 部署，或是在終端機裡翻一筆日誌。主題用 Google Sans Code 搭配更紗等寬黑體，另外調過中文的行距和窄螢幕上的換行。

## 一篇文章長這樣

把 Markdown 放進 `content/posts/`，寫上標題和日期，啟動 Hugo 就能看到文章。

```yaml
---
title: "今天又動手做了點什麼"
date: 2026-11-05T12:00:00+08:00
tags: ["日常", "開發"]
---
```

也可以看看[排版範例]({{< relref path="/posts/typography" lang="zh" >}})和[安裝說明]({{< relref path="/posts/getting-started" lang="zh" >}})，兩篇都是簡體中文。
