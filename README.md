# Sri Lanka Tourism Website Template

React + Vite + Tailwind CSS v4 + React Router + Framer Motion + Lucide.
Frontend only. Booking and contact forms open WhatsApp with a pre-filled message.

## Run

```bash
npm install
npm run dev
```

Build for production: `npm run build` (output in `dist/`).

## Customise for each client

| What | Where |
| --- | --- |
| Business name, tagline, WhatsApp number, phone, email, address, socials, nav, theme colours, hero text, about text, stats | `src/config/siteConfig.js` |
| Packages / tours / stays | `src/data/packages.js` |
| Gallery photos | `src/data/gallery.js` |
| Testimonials | `src/data/testimonials.js` |
| Destinations | `src/data/destinations.js` |

- WhatsApp number format: country code + number, digits only (e.g. `94771234567`).
- Images use Unsplash photo IDs via `unsplash("photo-...")`. Any full image URL also works.
  Every image has a gradient fallback if it fails to load.
- Stats, testimonials and packages ship as clearly marked placeholders. Replace with real
  content or remove them before launch. Do not publish invented reviews or figures.
- Map: replace the placeholder block in `src/pages/Contact.jsx` with a map iframe embed.

## Hosting note

The site uses client-side routing. On static hosts, configure a fallback to `index.html`
(Netlify: `_redirects` with `/* /index.html 200`; Vercel: handled automatically for Vite).
