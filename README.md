# tranquility base

The public-facing umbrella website for the tranquility base field laboratory and its associated independent hardware/software projects.

## Purpose

To provide an extremely low-maintenance, static, and Git-friendly home for project documentation and overview. It aims for a life-affirming, slightly whimsical retro computer terminal aesthetic.

## Stack

- **Static Site Generator:** Eleventy (11ty)
- **Styling:** Plain Vanilla CSS (no framework)
- **Content:** Markdown and Nunjucks (`.njk`)
- **Interactivity:** Minimal, plain JavaScript if required (none currently)

## Directory Structure

- `src/` - Contains all content (Nunjucks pages, Markdown projects)
- `src/_data/` - Global site data (e.g., `site.json` for social links)
- `src/_includes/` - Site layouts (e.g., `base.njk`)
- `assets/` - Static assets like CSS, images, and fonts
- `AGENTS.md` - Important context and instructions for AI coding agents
- `.eleventy.js` - Configuration file for Eleventy

## Development Commands

Ensure Node.js is installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm start
   ```
   This will start a local server, usually at `http://localhost:8080`, and watch for changes.

3. **Build the site for production:**
   ```bash
   npm run build
   ```
   The static site will be generated in the `_site/` directory.

## Build/Deployment Status

Currently in early development. The site builds successfully locally.

## Future Hosting

We are currently deciding whether to deploy using **GitHub Pages** or **Cloudflare Pages**. The architecture should remain independent of either hosting provider for now.