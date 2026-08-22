# Sajal Shrestha — Portfolio

A static, content-driven portfolio built with Astro. The site uses validated content collections, optimized images, a system-aware theme, and no client framework.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Useful commands:

- `npm run check` validates Astro components, TypeScript, and content schemas.
- `npm run build` validates and creates the production site in `dist/`.
- `MEDIUM_FEED_DISABLED=true npm run build` exercises the article-feed fallback.
- `npm run preview` serves the production build locally.

## Content

- Profile and social settings: `src/content/profile.json`
- Skills: `src/content/skills.json`
- About and contact copy: `content/index/about` and `content/index/contact`
- Projects: `content/index/projects`

Pushes to `master` deploy through GitHub Actions. GitHub Pages must use **GitHub Actions** as its source in the repository settings.
