# Hugo Themes 收录准备

核对日期：2026-11-05。状态：已准备申请材料，尚未向官方提交 PR。

当前入口是 [gohugoio/hugoThemesSiteBuilder](https://github.com/gohugoio/hugoThemesSiteBuilder)，不是已经归档的 `gohugoio/hugoThemes`。以[官方 Adding a theme 与验收规则](https://github.com/gohugoio/hugoThemesSiteBuilder#adding-a-theme)为准。

## 已准备

- 公开源码仓库、MIT 许可证、字体与上游参考的完整许可。
- 根目录 `theme.toml`：名称、描述、许可证链接、源码、Demo、作者和标签。
- 根目录 `hugo.toml`：`module.hugoVersion.min = "0.158.0"`。
- `images/screenshot.jpg`：1500 × 1000，3:2，无浏览器边框。
- `images/tn.jpg`：900 × 600，3:2，无浏览器边框。
- 中文 README 与英文翻译，图片使用绝对 URL，文档链接可在目录站点访问。
- 可访问的 GitHub Pages Demo 和完整的 `exampleSite/`。
- Hugo 0.161.1 与目录构建配置使用的 Hugo 0.167.0 已完成构建验证。
- `mainSections` 支持不同文章目录名；标签显示与搜索索引可单独关闭，Demo 默认保留标签和归档。

## 主题特点与参考来源

Chipaper 参考 AstroPaper 和 Archie 的简洁视觉。Hugo 页面模板与浏览器交互独立实现，具体参考与许可见 `THIRD_PARTY_NOTICES.md`。

主要特点是面向中文与英文混排的等宽字体组合、自托管的 Unicode 字体分片、可选的标签与归档，以及无需 Node 构建流程的 Hugo 实现。收录由维护者审核决定，准备材料和通过构建并不代表已经被接受。

## 提交流程

1. Fork 官方 `hugoThemesSiteBuilder` 仓库。
2. 在 `themes.txt` 中按字典序加入一行：

   ```text
   github.com/chius-me/chipaper
   ```

3. 提交改动，并向官方 `main` 分支创建 PR。
4. 确认 Netlify deploy preview 成功；若有错误，修复主题源码，再按官方说明刷新预览。
5. 等维护者审核合并。官方目录在每日 UTC 00:00（北京时间 08:00）定时构建完成后更新。

官方会优先读取最新 release 的材料；没有 release 时读取最新提交。以后发布新素材时，应确保对应 release 包含这些素材，并保留已经发布的 Git 引用与标签。

## 可用的 PR 描述草稿

Title: `Add Chipaper`

```text
Add Chipaper, a minimal, Chinese-first Hugo blog theme inspired by AstroPaper and Archie.

Repository: https://github.com/chius-me/chipaper
Demo: https://chius-me.github.io/chipaper/
License: MIT (bundled fonts retain their SIL Open Font Licenses)

The theme pairs self-hosted Google Sans Code and Sarasa Mono SC, includes
light/dark modes, search, TOC, code copying, optional tags, and archives.
It uses Hugo templates, CSS, and vanilla JavaScript without a Node build pipeline.

The repository includes theme metadata, a Hugo version declaration, bilingual
documentation, and 3:2 screenshot/thumbnail assets. Builds were checked with
Hugo 0.161.1 and 0.167.0.
```
