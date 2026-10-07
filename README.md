# tuanht-blog

Astro blog using the *Tuamatic* theme.

## Layout

- `src/site.config.ts`: title, author, menu, social icons, posts per page.
- `src/content/posts/*.md`: posts (`title`, `description`, `date`, `categories`, `tags`, `draft`, `image`).
- `src/content/pages/*.md`: static pages, served at `/<name>/`.
- `src/styles/global.css`: all theme CSS (Tuamatic).
- `src/layouts/Base.astro`, `src/components/*`: header, menu, sidebar, footer, post list, pagination.

## Commands

| Command           | Action                         |
| :---------------- | :----------------------------- |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Build to `./dist/`             |
| `npm run preview` | Preview the build              |

## Link preview images

Every page has an Open Graph image (`og:image`) used by link previews on Facebook, LinkedIn, X, Slack and similar. All are 1200x630.

| Page                   | Image                                                                |
| :--------------------- | :------------------------------------------------------------------- |
| Post                   | Generated card at `/og/<id>.png` (title, author, date), or `image`   |
| About, Resume, Archives | Generated card at `/og/page/<slug>.png`                             |
| Everything else        | `public/img/og-image.png` (`ogImage` in `src/site.config.ts`)       |

Generated cards are rendered at build time by `src/lib/og.ts` (satori + resvg), so they need no setup. Edit that file to change the design.

### Use a custom image for one post

1. Make a PNG or JPG at 1200x630, under 5 MB.
2. Put it in `public/img/og/`, for example `public/img/og/my-post.png`.
3. Set `image` in the post frontmatter. The path starts with `/` and is relative to `public/`:

   ```yaml
   ---
   title: My post
   description: ...
   date: 2026-10-07
   image: /img/og/my-post.png
   ---
   ```

Posts without `image` keep the generated card.

Platforms cache previews. After changing an image, re-scrape the URL with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or LinkedIn Post Inspector.
