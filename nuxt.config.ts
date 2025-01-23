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
  app: {
    head: {
      style: [
        {children: 
            `
            html, body {
              background-color: #0a0a0a;
              font-family: "AG Letterica";
            }
            @font-face {
              font-family: "Geometria";
              src: url("/fonts/Geometria.otf") format("opentype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Geometria";
              src: url("/fonts/Geometria-Medium.otf") format("opentype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "AG Letterica";
              src: url("/fonts/AGLettericaUltraCompressedC.otf") format("opentype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            :root {
                --font-geometria: "Geometria";
                --font-ag: "AG Letterica";
            }
            .anim-up {
              opacity: 0;
              will-change: transform;
              transform: translate3d(0, 0, 0);
            }
          `,
        }
      ],
      link: [
        {
          rel: 'preload',
          href: '/fonts/Geometria-Medium.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/AGLettericaUltraCompressedC.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous',
        }
      ]
    }
  }
});
