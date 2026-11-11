# Three Dials website

Static website for Three Dials.

## Local editing

Open the folder in your editor and edit:

- `index.html` for page structure and copy
- `september.css` for homepage styling
- The Cal.com booking links are in `index.html`.

There is no build step. Netlify can publish the repository root directly.

## Preview locally

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Publish

```sh
git status
git add index.html september.css README.md
git commit -m "Refresh Three Dials website"
git push origin main
```
