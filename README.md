# Chipaper

一个简洁、独立、重视中英混排的 Hugo 博客主题。灵感来自 [AstroPaper](https://github.com/satnaing/astro-paper) 与 [Archie](https://github.com/athul/archie)。

[在线 Demo](https://chius-me.github.io/chipaper/) · [实际站点](https://chius.cc/) · [English](README.en.md)

![Chipaper 首页](images/screenshot.jpg)

## 特点

- 单栏、留白、文字列表，适合个人博客与技术笔记。
- **Google Sans Code + 更纱等宽黑体（Sarasa Mono SC）**，针对中文字号、行距、标点与窄屏换行适配。
- 字体随主题本地托管，按 Unicode 字符分片加载，不依赖 Google Fonts 或第三方字体 CDN。
- 浅色与深色模式，默认跟随系统，支持保存读者的手动选择。
- 折叠目录、标题锚点、代码高亮与复制、可横向滚动的表格和代码。
- 文章列表、归档、标签、全文搜索、RSS、sitemap、404。
- 可配置的首页介绍、社交链接与 Giscus 评论。
- Hugo 模板、CSS 与少量原生 JavaScript；**日常构建不需要 Node.js、npm 或 Python**。

界面文字目前以中文为主，文章可使用中文、英文或混合内容。搜索采用字符串匹配，支持中文，不提供模糊检索与词义排序。

## 快速体验

需要 Hugo **0.158.0+**；Demo 和实际站点使用 Hugo Extended **0.161.1**。

```sh
git clone https://github.com/chius-me/chipaper.git
cd chipaper
hugo server --source exampleSite --baseURL http://localhost:1315/ --port 1315
```

打开 <http://localhost:1315/>。示例文章均在 `exampleSite/content/`。

## 安装到自己的博客

在已经初始化 Git 的 Hugo 项目根目录执行：

```sh
git submodule add https://github.com/chius-me/chipaper.git themes/chipaper
```

然后配置 `hugo.toml`。下面是可直接起步的示例：

```toml
baseURL = "https://example.com/"
title = "My Blog"
theme = "chipaper"
locale = "zh-CN"
defaultContentLanguage = "zh"
hasCJKLanguage = true
enableRobotsTXT = true

[languages.zh]
  locale = "zh-CN"

[taxonomies]
  tag = "tags"

[outputs]
  home = ["HTML", "RSS", "JSON"]

[markup.highlight]
  noClasses = false

[params]
  description = "我的个人博客"

[params.author]
  name = "Your Name"

[params.chipaper]
  greeting = "Hello, I'm Your Name"
  motto = "Write about the things you care about."
  recentCount = 7
  comments = false
  showRSS = true

[[params.social]]
  name = "GitHub"
  icon = "github"
  url = "https://github.com/your-name"

[[menus.main]]
  name = "文章"
  pageRef = "posts"
  weight = 10
[[menus.main]]
  name = "归档"
  pageRef = "archives"
  weight = 20
[[menus.main]]
  name = "标签"
  pageRef = "tags"
  weight = 30
[[menus.main]]
  name = "关于"
  pageRef = "about"
  weight = 40
```

完整配置见 [`exampleSite/hugo.toml`](exampleSite/hugo.toml)。其中 `themesDir = "../.."` 仅用于这个仓库内的 Demo，普通博客不要复制该项。

准备这些页面：

| 路径 | front matter |
| --- | --- |
| `content/posts/_index.md` | `title: 文章` |
| `content/tags/_index.md` | `title: 标签` |
| `content/archives.md` | `title: 归档`，`layout: archives` |
| `content/search.md` | `title: 搜索`，`layout: search` |
| `content/about.md` | `title: 关于` |

可直接参考或复制 [`exampleSite/content/`](exampleSite/content/)。搜索页即使不在菜单中，也会从导航的放大镜入口访问；需要首页的 JSON 输出才能工作。

把自己的 `favicon.svg` 与可选的 `apple-touch-icon.png` 放入站点的 `static/`。Demo 提供了 SVG favicon。

## 写文章

文章默认放在 `content/posts/`：

```yaml
---
title: "今天又折腾了点什么"
date: 2026-11-05T12:00:00+08:00
description: "可选：首页摘要与搜索引擎描述。"
tags: ["日常", "开发"]
draft: false
---
```

首页优先使用 `description`，否则提取正文第一个段落。正文中的二、三级标题会自动生成折叠目录。文章的 URL、日期和草稿行为沿用 Hugo 规则，不强制更改你的永久链接。

单篇文章设置 `showComments: false` 可以关闭评论。代码高亮需要 `markup.highlight.noClasses = false`，这样明暗模式才能使用各自的配色。

```sh
hugo server --disableFastRender
hugo --minify
```

## 配置说明

| 配置 | 默认 / 用途 |
| --- | --- |
| `params.author.name` | 页脚作者；未设置时使用站点标题 |
| `params.chipaper.greeting` | 首页标题；未设置时使用站点标题 |
| `params.chipaper.motto` | 首页座右铭；兼容 `params.author.headline` |
| `params.chipaper.recentCount` | 首页文章数，默认 7 |
| `params.chipaper.showRSS` | 显示 RSS 图标，默认 `true` |
| `params.chipaper.comments` | 启用 Giscus，默认关闭 |
| `params.defaultSocialImage` | 可选分享图片；支持 `assets/` 内资源或静态 / 绝对 URL |
| `params.social` | 社交链接数组：`name`、`icon`、`url` |

社交图标支持 `github`、`mail`、`rss`，其他名字显示通用链接图标。图标链接的 `name` 同时用于无障碍标签。

导航使用 Hugo `menus.main`。建议内部链接使用 `pageRef`，使 GitHub Pages 子路径也能正确生成链接。外链可配置 `params.target = "_blank"`。

### Giscus

先按 [giscus.app](https://giscus.app/zh-CN) 的说明启用 GitHub Discussions，并填写你自己仓库的配置：

```toml
[params.chipaper]
  comments = true

[params.chipaper.giscus]
  repo = "owner/repository"
  repoid = "YOUR_REPO_ID"
  category = "Announcements"
  categoryid = "YOUR_CATEGORY_ID"
  mapping = "pathname"
  lang = "zh-CN"
```

主题会同步明暗模式。已有博客迁移时，保留原仓库、分类、映射方式及文章路径，才能继续关联原来的讨论。

### 定制样式

在站点中创建 `assets/css/custom.css` 即可追加样式，无需修改主题源码。例如：

```css
:root { --accent: #256786; }
html[data-theme="dark"] { --accent: #eab38b; }
```

如需改模板，可以使用 Hugo 的站点模板覆盖。主题 partial 统一放在 `partials/paper/`，避免与其他主题的旧覆盖文件冲突。

## 字体

拉丁字母、数字与代码使用 Google Sans Code；中文与全角标点使用 Sarasa Mono SC。两种字体保留各自字宽，不强制实现「两个英文字符等于一个汉字」的字符网格。斜体在当前版本使用浏览器合成倾斜。

随仓库附带的完整 WOFF2 分片约 12 MiB；常用字两个字重合计约 1 MiB，其余字符按需加载。常用字包含 GB2312 一级字与制作初版时的内容，完整分片覆盖所选上游字体的其他 CJK 字符。写新文章不需要重新生成字库，缺字时由系统字体继续回退。

只有需要重新转换字体时才使用 Python / uv：

```sh
uv run scripts/build-fonts.py
```

脚本使用隔离环境，不安装系统字体；Sarasa 版本固定在脚本内。字体源文件下载到临时缓存，生成的字体和 CSS 随主题提交。字体许可证保存在 [`licenses/`](licenses/)。

## GitHub Pages Demo

[`pages.yml`](.github/workflows/pages.yml) 在 `main` 推送时构建 `exampleSite/` 并发布 GitHub Pages，PR 只构建、不部署。Hugo 版本固定为 0.161.1。

Fork 仓库后，在 **Settings → Pages → Source** 选择 **GitHub Actions**，再运行工作流。工作流从 Pages 读取实际站点 URL，支持 `/<repository>/` 项目子路径。普通 Hugo 构建不需要执行字体生成脚本。

## 更新主题

```sh
git submodule update --remote themes/chipaper
git add themes/chipaper
git commit -m "Update Chipaper"
```

先本地预览，再提交博客中的新 submodule 指针。这样博客可以固定在自己验证过的主题版本。

## 许可证与致谢

主题代码：[MIT](LICENSE)。字体：各自的 SIL Open Font License 1.1。

感谢 AstroPaper、Archie、Google Sans Code 和 Sarasa Gothic。灵感来源、源码参考与完整第三方许可见 [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)。
