# Svelte Babel Tailwindcss Template

This is a project template for [Svelte](https://svelte.dev) apps. This project includes:

- [Rollup](https://rollupjs.org/)
- [Svelte](https://svelte.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [CSSNANO](https://cssnano.co/)
- [Babel.js](https://babeljs.io/)
- [Babel Runtime](https://babeljs.io/docs/en/babel-runtime)
- [Core.js](https://github.com/zloirock/core-js)

## Get started

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit valentin-vogel/svelte-babel-tailwindcss svelte-app
cd svelte-app
```

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Building and running in production mode

To create an optimised version for current browsers:

```bash
npm run build
```

For legacy support with Babel.js, Core.js and runtime support:

```bash
npm run build:legacy
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv).