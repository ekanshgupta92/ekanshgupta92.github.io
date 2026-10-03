# ekanshgupta.co.in

Personal portfolio of Ekansh Gupta, built on the [Start Bootstrap Resume](https://startbootstrap.com/theme/resume/) theme (MIT, see `LICENSE`).

GitHub Pages serves the root `index.html`, which loads compiled files from `dist/`.

## Development

Requires Node 20 (see `.nvmrc`).

```sh
npm install
npm start       # build, then watch src/ and live-reload with browser-sync
npm run build   # rebuild dist/ from src/
```

- Content: edit `index.html` directly.
- Styles: `src/scss/` → `dist/css/styles.css`
- Scripts: `src/js/scripts.js` → `dist/js/scripts.js`
- Images: `src/assets/` → `dist/assets/`

`dist/` is committed (GitHub Pages serves it), so commit it after `npm run build`.
