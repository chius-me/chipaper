# Hugo Themes 收录笔记

2026-11-05。PR 已开：[Add Chipaper #830](https://github.com/gohugoio/hugoThemesSiteBuilder/pull/830)。Netlify 预览通过了，还在等维护者合并。预览能打开，只说明这次构建没报错。

- [目录里的预览页](https://deploy-preview-830--hugothemes.netlify.app/themes/chipaper/)
- [Netlify 构建日志](https://app.netlify.com/projects/hugothemes/deploys/6aec6d41a13d6d5b7a6fa550)

这次 `deploy/netlify`、Header rules、Redirect rules 都成功了，Pages changed 是 neutral。预览页上的截图、主题元数据、仓库地址和 Demo 链接对过。

提交入口是 [gohugoio/hugoThemesSiteBuilder](https://github.com/gohugoio/hugoThemesSiteBuilder)。旧的 `gohugoio/hugoThemes` 已经归档。规则以[官方 Adding a theme](https://github.com/gohugoio/hugoThemesSiteBuilder#adding-a-theme) 为准。

## 已经备好的

- 公开仓库、MIT，以及字体和上游参考的许可证全文。
- 根目录 `theme.toml`：名字、简介、许可证链接、仓库、Demo、作者、标签。
- 根目录 `hugo.toml`：`module.hugoVersion.min = "0.158.0"`。
- `images/screenshot.jpg`：1500 × 1000，3:2，没有浏览器边框。
- `images/tn.jpg`：900 × 600，3:2，没有浏览器边框。
- 中文 README 和英文 README。图片用绝对地址，链接在目录站上也能打开。
- 能访问的 GitHub Pages Demo，以及完整的 `exampleSite/`。
- 用 Hugo 0.161.1，和目录构建用的 Hugo 0.167.0，都构建过。
- `mainSections` 可以换成别的文章目录名。标签显示和搜索索引可以单独关掉。Demo 里标签和归档是开着的。

## 给维护者看的几句

样子参考 AstroPaper 和 Archie。Hugo 模板和页面上的脚本是单独写的，出处和许可见 `THIRD_PARTY_NOTICES.md`。

主题主要解决中文和英文混排：等宽字体、自带的 Unicode 字体分片，标签和归档可以关掉。构建就是 Hugo，没有 Node 这一步。

## 当时的提交步骤

1. Fork 官方 `hugoThemesSiteBuilder`。
2. 在 `themes.txt` 里按字典序加一行：

   ```text
   github.com/chius-me/chipaper
   ```

3. 向官方 `main` 提 PR。
4. 看 Netlify 预览。有错就改主题，再按官方说明刷新预览。
5. 等维护者合并。目录每天 UTC 00:00（北京时间 08:00）构建一次，合并之后要等那一轮。

官方先读最新 release 里的文件。没有 release 就读最新提交。以后换截图或说明，放进对应的 release。已经推上去的 tag 留着，别改也别删。

## PR 描述草稿

Title: `Add Chipaper`

```text
Add Chipaper, a one-column Hugo blog theme for writing in Chinese and English.
The look comes from AstroPaper and Archie.

Repository: https://github.com/chius-me/chipaper
Demo: https://chius-me.github.io/chipaper/
License: MIT (bundled fonts keep their SIL Open Font Licenses)

Latin is self-hosted Google Sans Code. Chinese is Sarasa Mono SC, split by
Unicode range. Light and dark mode, search, TOC, code copy, optional tags,
and archives. Templates, CSS, and a little plain JavaScript. A normal build
is Hugo alone.

theme.toml, a minimum Hugo version, Chinese and English READMEs, and 3:2
screenshot and thumbnail are in the repo. Built with Hugo 0.161.1 and 0.167.0.
```
