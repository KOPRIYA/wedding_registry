# Wedding Registry

A small public wedding registry web app for Mithu & Atin. Guests can browse gifts, suggest gifts, and reserve a gift. Shared data can be stored for free in a Google Sheet through Google Apps Script.

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server.

Without a configured backend, the app uses browser storage. That is useful for previewing, but every visitor will have their own copy.

## Free Shared Storage With Google Drive

The shared registry uses a Google Sheet saved in your Google Drive.

1. Create or open a Google Sheet with a tab named `Gifts`.
2. In that Sheet, open **Extensions > Apps Script**.
3. Replace the default `Code.gs` contents with `google-apps-script/Code.gs` from this repo.
4. Run the `setup` function once and approve the Google permissions.
5. Open **Deploy > New deployment > Web app**.
6. Set **Execute as** to **Me**.
7. Set **Who has access** to **Anyone**.
8. Deploy and copy the web app URL ending in `/exec`.
9. Put that URL in `config.js`:

```js
window.WEDDING_REGISTRY_API_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
window.WEDDING_REGISTRY_ADMIN_KEY = "";
window.WEDDING_REGISTRY_API_TRANSPORT = "jsonp";
```

Guests can reserve gifts without signing in. The app stores a private release code in the guest's browser, so only the browser that reserved a gift can make it available again.

## Optional Admin Key

If you want yourself to be able to release any gift later:

1. In Apps Script, open **Project Settings > Script properties**.
2. Add a property named `ADMIN_KEY` with a private password-like value.
3. Put the same value in `window.WEDDING_REGISTRY_ADMIN_KEY` in `config.js` for your private/admin copy of the site.

Do not publish an admin key in a public repository.

## Deploy As A Static Site

This project can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static web host. Upload these files:

- `index.html`
- `app.js`
- `styles.css`
- `config.js`
- `resources/`

## Deploy With Docker

Build and run locally:

```sh
docker build -t wedding-registry .
docker run --rm -p 8080:80 \
  -e WEDDING_REGISTRY_API_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec" \
  wedding-registry
```

Then open `http://localhost:8080`.

For Render, Fly.io, Railway, or another container host, set `WEDDING_REGISTRY_API_URL` as an environment variable. Leave `WEDDING_REGISTRY_API_TRANSPORT` as `jsonp` for the Google Apps Script backend.
