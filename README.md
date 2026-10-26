# Metalgate Leeds

Website for **Metalgate Leeds Ltd**, a metal fabrication business in Bradford serving Leeds and West Yorkshire: gates, railings, fences, staircases, canopies, repairs and welding.

Live site: <https://metalgateleeds.co.uk>

## Features

- Split hero with a photo slideshow and a gate-opening intro
- Light and dark section bands, sticky navbar and footer on every page
- Scroll animations: progress bar, reveal-on-scroll, parallax, marquee (CSS only; respects `prefers-reduced-motion`)
- Interactive **Services** list
- **Projects** photo strips with a **lightbox** (previous/next buttons, arrow keys, swipe, Esc to close)
- Contact form that opens **WhatsApp** with the visitor's message pre-filled (the site has no backend)
- Pages: Home (`/`), About (`/about`), Contact (`/contact`)

## Tech stack

- [Next.js](https://nextjs.org) 15 (App Router) with static export (`output: "export"`)
- React 19
- Tailwind CSS 4
- `react-icons` for social icons
- Fonts: Playfair Display and Barlow via `next/font`

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Command         | What it does                                      |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start the development server                      |
| `npm run build` | Build the static site into `out/`                 |
| `npm run lint`  | Run ESLint                                        |

To preview the production build locally, run `npm run build` and serve the `out/` folder, for example `npx serve out`.

## Project structure

```
src/app/
  layout.jsx            Fonts, site metadata, navbar and footer
  page.jsx              Home page (sections in order)
  about/  contact/      About and Contact pages
  navbar/  footer/      Shared layout components
  components/           Page sections (Hero, Services, Projects, Lightbox, ...)
  data/
    site.js             Phone, email, address, hours, social links, navigation, services
    projects.js         Project photos (paths, sizes, alt text)
  globals.css           Design tokens, light/dark palettes and animations
public/
  images/               Project photos (full size) and images/thumbs/ (small versions)
  assets/               Logo files and other static assets
```

## Editing content

- **Contact details, opening hours, links, services list**: `src/app/data/site.js`
- **Project photos and their descriptions (alt text)**: `src/app/data/projects.js`
- **Page text**: the matching file in `src/app/components/` (for example `Statement.jsx`, `Process.jsx`, `AboutSection.jsx`)
- **Colours and animations**: `src/app/globals.css`

### Adding a project photo

1. Put a resized copy (about 1800 px on the longest side) in `public/images/` and a small one (about 800 px) in `public/images/thumbs/`, with the same file name.
2. Add an entry to `src/app/data/projects.js` with the file id, the pixel sizes of both versions, and a short description for `alt`.

Avoid committing original phone photos; they are often 5-10 MB and slow the site down.

## Deployment

The site is deployed with **Azure Static Web Apps**. The workflow in `.github/workflows/azure-static-web-apps-deploy.yml` builds and deploys automatically:

- A push to `main` publishes to production.
- Opening or updating a pull request creates a temporary preview environment (its link is posted on the pull request).

The deployment token is stored as a GitHub repository secret and does not need to be touched for normal changes.
