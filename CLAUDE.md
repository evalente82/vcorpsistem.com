# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static marketing website for **VCorp Sistem**, a Brazilian software company. It is plain
HTML/CSS/JS (no build step, no framework, no package manager) served by **GitHub Pages** at
the custom domain in `CNAME` (`vcorpsistem.com`). All UI copy is in Brazilian Portuguese.

## Running locally

There is no build, install, lint, or test tooling. Serve the repository root with any static
server and open `index.html`:

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

`.vscode/launch.json` is preconfigured to launch Chrome against `http://localhost:8080` with
the workspace root as web root.

## Deployment

`.github/workflows/static.yml` deploys the **entire repository root** to GitHub Pages on every
push to `main` (or via manual `workflow_dispatch`). There is no staging step or asset
pipeline — whatever is committed at root is what goes live. `.nojekyll` disables Jekyll
processing. Branch flow in history is `Dev`/`homolog` → PR → `main`.

## Architecture

Each page is a standalone, self-contained HTML document. There are no shared partials,
templates, or includes — the navbar and footer markup is **duplicated in each HTML file** and
must be edited in every page to stay consistent.

Pages:
- `index.html` — landing page (hero, products, revenda/reseller, about, founder, contact)
- `atendimento-inteligente.html` — "AtendIA" WhatsApp AI product (pricing tiers)
- `escala-trabalho.html` — work-scheduling product
- `sistema-lotus.html` — retail PDV product (marked discontinued in `index.html`)
- `revendas.html` — reseller / white-label program
- `termos-de-uso.html` — terms of use

Shared assets:
- `styles.css` — single global stylesheet. Theme is driven by CSS custom properties in
  `:root` (e.g. `--primary-color`, `--atendia-primary`, `--cor-revenda-primaria`). Each
  product has its own accent color namespace; reuse the existing variables instead of
  hardcoding colors.
- `scripts.js` — global JS: AOS init and the scroll-triggered navbar `.scrolled` class.
- `assets/` — images, organized loosely (`assets/AtendIA/`, `assets/pessoas/`, etc.).

Third-party libraries are loaded from CDNs in each page's `<head>` (Bootstrap 5.3, AOS 2.3.1,
FontAwesome 6.4, Google Fonts). No local copies or lockfiles.

## Conventions

- **Layout/components** come from Bootstrap 5 utility classes; custom styling layers on top in
  `styles.css`. Scroll animations use AOS via `data-aos="..."` attributes.
- **Contact / conversion** is handled entirely through WhatsApp deep links
  (`https://wa.me/5521990297098?text=...` with a URL-encoded pre-filled message), not an
  on-page form. When adding a CTA, follow this pattern.
- **SEO**: `index.html` embeds a JSON-LD `Organization` schema (founder, contact, pricing
  offers). Keep prices/contact info there in sync with the visible page content.

## Gotchas

- `scripts.js` still contains an EmailJS init block and a `contactForm` submit handler, but
  **no current page includes an EmailJS contact form or loads the EmailJS library** — those
  pages were converted to WhatsApp links. That code is effectively dead and the `emailjs.init`
  call would throw if it ran (the library isn't loaded). `EMAILJS_SETUP.md` documents the old
  flow. Don't assume the contact form works; remove or revive this code deliberately if you
  touch it.
- Because navbar/footer markup is copy-pasted per page, layout/nav changes must be applied to
  every HTML file.
