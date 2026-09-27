# AI Agent Instructions (AGENTS.md)

Welcome. If you are an AI coding agent tasked with maintaining or updating this repository, please adhere to the following guidelines.

## What this repository is
This is the repository for the **tranquility base** website. It serves as the public-facing umbrella for independent hardware/software projects, which are maintained elsewhere (e.g., `~/Projects/maker/`).

## Crucial Rule: Do not modify external projects
Individual project repositories under `~/Projects/maker/` (such as `wavehound`) **MUST NOT** be modified from this repository unless explicitly requested by the user.

## The Eleventy Architecture
This is a very simple static site built with Eleventy (11ty).
- **Configuration:** `.eleventy.js`
- **Content:** Found in `src/`. Markdown is used for content, Nunjucks (`.njk`) for pages and templates.
- **Data:** Global site data (social links, metadata) lives in `src/_data/site.json`.
- **Layouts:** Templates live in `src/_includes/`.
- **Styles:** Plain vanilla CSS in `assets/css/site.css`.

## Workflow Commands
- **Install dependencies:** `npm install`
- **Run local development server:** `npm start` (this uses `eleventy --serve`)
- **Build the site:** `npm run build` (outputs to `_site/`)

## Design Principles
1. **Low Maintenance:** The site must remain static, low-maintenance, and easy to understand.
2. **Visual Language:** The site uses a "retro computer terminal / field computer" aesthetic. It should be blocky, pixelated, and use ASCII art, but it should feel **life-affirming, friendly, curious, and whimsical**. Avoid cyberpunk, militaristic, or "elite hacker" clichés (no green-on-black Matrix themes, no skulls, no guns).
3. **Mascot:** A friendly ASCII/pixel-art foxhound is part of the identity.
4. **No Unnecessary Dependencies:** Do NOT introduce frameworks (CSS or JS) or dependencies (like a CMS, database, or analytics) without a concrete reason and explicit permission. Keep it plain HTML/CSS/JS.