# NIMMS Website (local run)

This repository contains a small Express/EJS website. It was adapted to be runnable locally with minimal setup.

Quick start (macOS / zsh):

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
# or
node app.js
```

3. Open http://localhost:3000 in your browser.

Notes:
- The original project included Next.js/React files alongside an Express server. The Express server serves EJS templates from `views/` and static assets from `public/`.
- For quick local styling the `views/index.ejs` uses the Tailwind CDN. For production builds it's better to compile Tailwind locally (`npm run build:css` is available).
- The `package.json` currently requires Node >= 22. If you have an older Node version, either upgrade Node or change the `engines.node` entry in `package.json`.

If you want, I can:
- Replace the Tailwind CDN with a built stylesheet (run `npm run build:css` and serve `public/css/output.css`).
- Convert the Next.js parts into a full Next app or remove them to avoid confusion.
# nimms
# nimms
# nimms
# nimms
