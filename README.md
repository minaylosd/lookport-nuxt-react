# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## How to create and use React components using Veaury in Nuxt.js
> [!NOTE]
>
> If you want to use the React component in `node_modules` directly, you can refer to the development part directly, and just install `veaury@^2.5` and `react` and `react-dom`.

### Install dependencies
You need to install the following dependencies.  
`veaury@^2.5`, `react`, `react-dom`, `@vitejs/plugin-react`

### Configuration on build
You need to configure `nuxt.config.ts`
```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
import veauryVitePlugins from 'veaury/vite/index.js';

// @ts-ignore
export default defineNuxtConfig({
    devtools: { enabled: true },
    vite: {
        plugins: [
            // @ts-ignore
            veauryVitePlugins({
                type: 'vue',
                isNuxt: true
            })
        ],
    },
});
```

### Development
The components output using `Veaury` are client components.   
React components should be placed in the `react_app` directory by default. If `JSX` exists in the file, the file suffix should be `.jsx` or `tsx`.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
