# Three Dials website

Static website for Three Dials.

## Local editing

Open the folder in your editor and edit:

- `index.html` for page structure and copy
- `styles.css` for design
- `script.js` for the mobile menu and Calendly behavior

There is no build step. Netlify can publish the repository root directly.

## Preview locally

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Publish

```sh
git status
git add index.html styles.css script.js README.md
git commit -m "Refresh Three Dials website"
git push origin main
```
