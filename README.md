# Rishab Kumar Portfolio

Personal portfolio website for Rishab Kumar, Robotics Engineer.

The site highlights my experience, projects, technical skills, resume, and contact details. It is built with React, TypeScript, Vite, and styled-components.

## Tech Stack

- React 19
- TypeScript
- Vite
- styled-components
- tsParticles
- Formspree
- Vercel Analytics (optional)

## Getting Started

Use Node.js 24 (see `.nvmrc`) and npm 11 or later. Install dependencies:

```bash
npm ci
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Resume

The downloadable resume is served from:

```text
public/Rishab_Kumar.pdf
```

## Deploy to your GitHub account

1. Create a public repository named `portfolio` in your GitHub account, or use
   an existing repository. Include `public/Rishab_Kumar.pdf` when you commit.
2. Push this project, including `.github/workflows/deploy-pages.yml`, to its
   `main` branch.
3. Open the repository's **Settings → Pages** and select **GitHub Actions** as
   the source under **Build and deployment**.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Future
   pushes to `main` will deploy automatically.
5. The successful workflow's deployment link opens your published portfolio.

For a repository named `portfolio`, the address is
`https://YOUR_USERNAME.github.io/portfolio/`. For a repository named
`YOUR_USERNAME.github.io`, it is `https://YOUR_USERNAME.github.io/`.

The workflow reads the site URL and base path from GitHub Pages, so no username
or repository name needs to be hardcoded in the source. It builds the site with
Node.js 24, checks lint, generates a sitemap with the actual deployment URL,
and publishes only `dist/`.

To check a repository-path build locally:

```bash
VITE_BASE_PATH=/portfolio/ npm run build
VITE_BASE_PATH=/portfolio/ npm run preview
```

Open `http://127.0.0.1:4173/portfolio/`. Normal local development and root-domain
deployments use `/` by default.

Before sharing the site, add your profile photo at
`public/Images/Rishab_Kumar.jpg`. The contact form currently has hardcoded
Formspree and reCAPTCHA settings in `src/components/Form/Form.tsx`; replace
them with settings from your own accounts and allow your GitHub Pages domain
in reCAPTCHA. The email and phone links work independently of the form.

Vercel Analytics is disabled by default because its endpoint is unavailable
on GitHub Pages. Set `VITE_VERCEL_ANALYTICS=true` only for a Vercel deployment.

## Notes

- This project uses npm and `package-lock.json`.
- `Profile.pdf` is local-only and ignored by Git.
- Generated build output in `dist/` is ignored.
