# starter-react

<img width="1440" alt="image" src="https://github.com/packlify/starter-react/assets/19575942/750057f9-9333-4b52-968a-a926f8aff32e">

## About
- This is a simple project to use **React** with a **Bun** server in production.
- **Bun** will serve using Express as the web server and server-render the React app.
- **Vite** is used to bundle the client side code as the server side code is not bundled anymore just executed by Bun.
- **HMR** is fully working with React-refresh manually imported from Vite bundling server available for Development only. The complexity of HMR and Tailwind purge are the reasons Vite is used and not Bun's bundler.
- **Tailwind** is used via the only CSS file served: `global.css` as it is ideal not to serve any other css via JS in the app but only use Tailwind.
- **Firebase** config is added by default. All apps require authentication.
- **React Query** is added with server Hydration to handle user authentication.
- **Prettier + ESLint**

## Installation

To install dependencies and build the project first:

```bash
bun install # install dependencies
bun dist # build the project
```

## Development

1. Start the development server:

```bash
bun dev
```

2. Start Vite watch:

```bash
bun watch
```

## Production

1. Build the project:

```bash
bun dist
```

2. Start the production server:

```bash
bun start
```

## Tools

```bash
bun type-check # tsc to check types, used only before production build
bun lint # eslint
bun format:check # prettier only check
bun format # prettier format
```

This project was created using `bun init` in bun v1.0.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
