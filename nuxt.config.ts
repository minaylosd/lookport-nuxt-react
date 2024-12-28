// https://nuxt.com/docs/api/configuration/nuxt-config
import veauryVitePlugins from "veaury/vite/index.js";

// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      // @ts-ignore
      veauryVitePlugins({
        type: "vue",
        isNuxt: true,
      }),
    ],
    optimizeDeps: {
      include: ["@react-three/fiber", "@react-three/drei"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2024-12-28",
  ssr: false,
});
