
# werner.best

This is the code for building the static website found at [werner.best](https://werner.best). 
The website uses Nuxt 3 and is based on the template made available at [Atinux/content-wind](https://github.com/Atinux/content-wind); utilizing [Nuxt Content](https://content.nuxtjs.org), [TailwindCSS](https://tailwindcss.com), [Iconify](https://iconify.design), and [Floating Vue](https://v-tooltip.netlify.app/).

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Static Hosting

Pre-render the website to be deployed on any static hosting:

```bash
npm run generate
```

The `dist/` directory is ready to be deployed (symlink to `.output/public`), [learn more on Nuxt docs](https://v3.nuxtjs.org/guide/deploy/static-hosting).
