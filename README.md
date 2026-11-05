# EventFlow

A small event browsing site built with Nuxt 2 and Vue 2. Events come from a local JSON file, so there's no backend or database involved.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

For a production build:

```bash
npm run build
npm run start
```

## Project layout

- `pages/` – home page, events list and event detail page
- `components/` – header, footer, event card and featured events
- `data/events.json` – all the event data
- `assets/css/global.css` – global styles

## Adding events

Add another object to `data/events.json` with the same fields as the others. The detail page picks it up automatically at `/events/<id>`.
