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
