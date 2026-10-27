# Afreen Attar · CEO, MD Groups

A custom executive portfolio with portrait-led art direction, an accessible interactive business-sector explorer, responsive navigation and direct email contact.

Live website: https://afreen-attar-portfolio.vercel.app/

Vercel is connected to this repository for automatic deployments from `main`.

## Run

Requires Node.js 20 or newer. No third-party runtime dependencies.

```sh
npm run dev
npm run check
npm run build
```

Development preview: http://127.0.0.1:4173. Production files are generated in `dist/`. Vercel uses the included configuration.

## Edit

- `index.html` — biography, page sections and metadata
- `styles.css` — visual system and responsive layout
- `script.js` — sector content, accessible interactions and clipboard behaviour
- `assets/` — optimised images, local fonts and favicon
- `docs/RESEARCH.md` — primary sources and content provenance
- `docs/DESIGN.md` — art direction and design rationale

Contact is an honest `mailto:` link that opens the visitor's email application; there is no form that pretends to send messages. The copy-email action uses the Clipboard API with a visible fallback. Corporate sources are linked on the page.

The Afreen portrait was supplied for this project. Sector photographs are illustrative Unsplash photography. Local font licensing is included with the assets.
