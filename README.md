# tuanht-blog

Astro blog using the *Tuamatic* theme.

## Layout

- `src/site.config.ts`: title, author, menu, social icons, posts per page.
- `src/content/posts/*.md`: posts (`title`, `description`, `date`, `categories`, `tags`, `draft`).
- `src/content/pages/*.md`: static pages, served at `/<name>/`.
- `src/styles/global.css`: all theme CSS (Tuamatic).
- `src/layouts/Base.astro`, `src/components/*`: header, menu, sidebar, footer, post list, pagination.

## Commands

| Command           | Action                         |
| :---------------- | :----------------------------- |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Build to `./dist/`             |
| `npm run preview` | Preview the build              |
