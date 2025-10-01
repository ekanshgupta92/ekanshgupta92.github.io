# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Ekansh Gupta (robotics and AI engineer) built using the Start Bootstrap Resume theme. The site is a single-page application showcasing projects, experience, education, and skills. It's hosted on GitHub Pages at ekanshgupta.co.in.

## Build System

This project uses a custom Node.js build system with the following workflow:

**Source files:** `src/` directory contains:
- `src/scss/` - SCSS stylesheets (compiled to CSS)
- `src/js/scripts.js` - JavaScript functionality
- `src/assets/` - Images and static assets

**Build output:** `dist/` directory contains compiled production files

### Key Commands

- `npm install` - Install dependencies (required for first-time setup)
- `npm start` - Build project and start development server with live reload
- `npm run build` - Full production build (cleans dist/, compiles all assets)
- `npm run clean` - Delete dist/ directory

### Individual Build Tasks

- `npm run build:scss` - Compile SCSS to CSS
- `npm run build:scripts` - Process JavaScript
- `npm run build:assets` - Copy assets to dist/

## Architecture Notes

### Direct HTML Editing Workflow

**IMPORTANT:** This project has diverged from the standard template workflow. The main content is maintained directly in the root `index.html` file (no Pug templates used).

When making content changes:
1. Edit `index.html` directly (projects, experience, education, skills sections) - this is what gets deployed
2. Styling changes should be made in `src/scss/` files
3. JavaScript changes should be made in `src/js/scripts.js`
4. After changing SCSS or JS, run `npm run build` to compile to `dist/`

Note: The root `index.html` is what's actually deployed to GitHub Pages (not `dist/index.html`).

### Slideshow Implementation

The site includes a custom slideshow component (see Unmanned Aerial Vehicle project) that uses:
- `.mySlides` class for slide containers
- `.dot` class for navigation dots
- JavaScript in `src/js/scripts.js` handles slide transitions and dot navigation

### SEO and Metadata

The site includes comprehensive SEO optimization:
- Structured data (JSON-LD) for search engines
- Open Graph tags for social media (intentionally no og:image)
- Robots meta tag set to discourage image previews
- Google site verification

## Git Workflow

- Main branch: `robotics`
- Current working branch: `Improvements`
- Always check which branch you're on before committing

## Technologies

- **Frontend:** HTML5, Bootstrap 5, vanilla JavaScript
- **Build tools:** SCSS (Sass), PostCSS, Autoprefixer
- **Dev server:** Browser-sync for live reloading
- **Template base:** Start Bootstrap Resume theme (heavily customized)
