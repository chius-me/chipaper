# Chipaper

The Hugo theme I use for my own blog. One column, monospace type, Chinese and English in the same post. The look comes from [AstroPaper](https://github.com/satnaing/astro-paper) and [Archie](https://github.com/athul/archie).

[Live demo](https://chius-me.github.io/chipaper/) · [Chius's blog](https://chius.cc/) · [中文文档](https://github.com/chius-me/chipaper/blob/main/README.md)

![Chipaper home page](https://raw.githubusercontent.com/chius-me/chipaper/main/images/screenshot.jpg)

Body text uses **Google Sans Code** for Latin and **Sarasa Mono SC** for Chinese. The files ship with the theme and load by Unicode range. Light and dark follow the system, and a manual choice is remembered.

The usual pieces are here: a post list, archives, tags, search, a folding table of contents, heading links, code highlighting with a copy button, RSS, and a sitemap. The interface is in Chinese. Search matches the text you type. Separate words with spaces and a post has to contain each of them. Chinese is matched the same way.

## Run the demo

Hugo **0.158.0** or newer. The demo is built with Extended **0.161.1**.

```sh
git clone https://github.com/chius-me/chipaper.git
cd chipaper
hugo server --source exampleSite --baseURL http://localhost:1315/ --port 1315
```

## Install

From a Hugo site that is already a Git repo:

```sh
git submodule add https://github.com/chius-me/chipaper.git themes/chipaper
```

Set `theme = "chipaper"`, turn on `hasCJKLanguage`, add `JSON` to the home outputs, and set `markup.highlight.noClasses = false`. The full file is [`exampleSite/hugo.toml`](https://github.com/chius-me/chipaper/blob/main/exampleSite/hugo.toml). Delete `themesDir = "../.."` in your own site. That line only lets this repository preview itself.

Posts go in `content/posts/`. Copy the archive, search, about, posts index, and tags index from [`exampleSite/content`](https://github.com/chius-me/chipaper/tree/main/exampleSite/content/). `description` in front matter is the excerpt on the home page. `showComments: false` turns comments off for one post.

```toml
[params.author]
  name = "Your Name"

[params.chipaper]
  greeting = "你好，我是阿某"
  motto = "平时写的东西放这儿。"
  recentCount = 7
  showRSS = true
  showTags = true
  comments = false

[[params.social]]
  name = "GitHub"
  icon = "github"
  url = "https://github.com/your-name"
```

Icons exist for `github`, `mail`, and `rss`. Any other name gets a plain link icon. In `menus.main`, point internal pages at Hugo `pageRef` so links still resolve under a GitHub Pages subpath such as `/repository/`. Extra CSS can live in `assets/css/custom.css`. To change a template, override it from your site. Theme partials are under `partials/paper/`.

For Giscus, set `params.chipaper.comments = true` and fill in `repo`, `repoid`, `category`, `categoryid`, `mapping`, and `lang` under `params.chipaper.giscus`. When moving an existing blog, keep the repo, category, mapping, and post paths, so the old threads stay on the same posts.

### Tags and archives

Both are optional. To turn the taxonomy off:

```toml
disableKinds = ["taxonomy", "term"]

[params.chipaper]
  showTags = false
```

Then remove the tag and archive menu entries, plus `content/tags/_index.md` and `content/archives.md`. With JavaScript off, search sends people to the post list. The theme and the demo leave both features on.

Hugo `mainSections` decides which section counts as posts. Leave it unset and Hugo picks the section with the most pages. `mainSections = ["posts"]` pins it. `post` or `notes` works too.

## Fonts

Latin, digits, and code are Google Sans Code. Chinese and fullwidth punctuation are Sarasa Mono SC. Each font keeps its own widths. Italics in this version are a browser slant.

The WOFF2 slices add up to about 12 MiB. The two common subsets, regular and bold, are about 1 MiB and load first. Other characters load when a page needs them. The common set covers GB2312 level 1 and characters that showed up while the first version was being written. The remaining slices cover the other CJK glyphs from the upstream font. A glyph that was not cut falls back to the system font. New posts use the fonts as shipped.

Rebuild them only when you want to cut a new set:

```sh
uv run scripts/build-fonts.py
```

The script runs under uv, pins the Sarasa release, and does not install fonts on the machine. A normal `hugo` build uses the files already in the repo.

## Demo and updates

The [Pages workflow](https://github.com/chius-me/chipaper/blob/main/.github/workflows/pages.yml) builds the example site on pushes and pull requests, and deploys `main` to GitHub Pages. Hugo there is pinned to 0.161.1. After a fork, set **Settings → Pages → Source** to **GitHub Actions**. The workflow reads the site URL from Pages, including a `/repository/` subpath.

Update an installed copy with `git submodule update --remote themes/chipaper`, look at it locally, then commit the new submodule pointer in your blog.

## License

Theme code is [MIT](https://github.com/chius-me/chipaper/blob/main/LICENSE). The fonts keep their SIL Open Font Licenses.

Templates and scripts are written for Hugo. AstroPaper and Archie are visual references. Upstream projects, the files this theme looked at, and the full license texts are in [THIRD_PARTY_NOTICES.md](https://github.com/chius-me/chipaper/blob/main/THIRD_PARTY_NOTICES.md).
