# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (ishansvyas.github.io) for Ishan Vyas, an Electrical & Computer Engineering student at Duke University. The site is a static HTML/CSS/JavaScript website built on top of a modified FreeHTML5.co template.

## Site Structure

The website consists of four main pages:
- `index.html` - Home page with introduction and color picker
- `portfolio.html` - Portfolio grid showcasing projects
- `resume.html` - Resume viewer (embeds PDF from `docs/resume0825_0.pdf`)
- `about.html` - About page with bio and contact information

### Portfolio Detail Pages

Individual project pages are located in the `portfolio/` directory:
- `covasimplify.html` - Epidemic simulation accelerator
- `eit.html` - Electromagnetically Induced Transparency cooling
- `sha3.html` - SHA-3 hash function accelerator
- `prosthetic.html` - Myoelectric prosthetic hand
- `mips.html` - 100 MHz CPU in Verilog
- `ancestry.html` - Ancestry estimator
- `safety.html` - Safety-related project

These detail pages use relative paths (`../css/`, `../js/`, `../images/`) to reference assets.

## Assets Organization

- `css/` - Stylesheets (Bootstrap, Animate.css, Flexslider, custom `style.css`)
- `js/` - JavaScript libraries and custom scripts
- `images/` - Image assets
  - `images/myown/` - Personal images and custom graphics
- `docs/` - PDF documents (resume, reports)
- `sass/` - SASS source files (if making style changes)

## Key JavaScript Functionality

### Color Picker Feature
The site has a custom color picker feature that allows users to change the site's accent color:
- Implemented in `js/color-picker.js` and inline scripts in `index.html`
- Uses localStorage to persist color selection across pages
- Changes: logo period color, link colors, active page underline, text selection highlight
- All pages load `color-picker.js` to apply saved color preferences

### Main Site Behaviors (js/main.js)
- Mobile menu handling
- Scroll animations with Waypoint.js
- "Go to top" button functionality
- Page loader animation
- Flexslider for hero sections
- Dropdown menu interactions

## Navigation Structure

All pages include consistent navigation:
- Logo: "IV." (where the period is styled with the accent color)
- Menu items: Home, Portfolio, Resume, About
- The `active` class marks the current page
- Navigation is implemented in `.fh5co-nav` with `.menu-1` class

## External Dependencies

The site uses several third-party libraries:
- jQuery (version in `js/jquery.min.js`)
- Bootstrap 3.x for grid and components
- Animate.css for animations
- Flexslider for sliders
- Waypoints for scroll-triggered animations
- Font Awesome for icons (loaded from CDN)
- Google Fonts: Work Sans, Inconsolata, Playfair Display
- Google Analytics (tracking ID: G-1MY2YZ3D7C)

## Development Guidelines

### Adding Portfolio Items
1. Create a new HTML file in `portfolio/` directory
2. Use relative paths: `../css/`, `../js/`, `../images/`, `../docs/`
3. Follow the same structure as existing portfolio pages (e.g., `covasimplify.html`)
4. Add a portfolio card to `portfolio.html` in the grid
5. Include thumbnail image in `images/myown/`

### Updating Styles
- Main custom styles are in `css/style.css`
- Bootstrap provides the grid system and basic components
- Color picker dynamically injects styles for accent color changes

### Common Patterns
- All pages include Google Analytics tracking code in the `<head>`
- All pages have the same navigation structure
- All pages include the "go to top" button (`.gototop`)
- Animations use the `.animate-box` class with `data-animate-effect` attribute
- Portfolio detail pages embed PDFs using `<iframe>` or `<embed>` tags

## Important Notes

- This is a GitHub Pages site - no build process or server-side code
- The site is deployed directly from the repository root
- PDF documents are stored in `docs/` directory
- Resume is embedded, not linked (see `resume.html:108`)
- Template attribution to FreeHTML5.co is preserved in HTML comments
