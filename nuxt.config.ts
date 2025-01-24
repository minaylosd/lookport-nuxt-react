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
      title: 'Lookport – AI-Driven Event Ticketing System',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Lookport is an AI-powered ticketing platform designed for event promoters. Sell tickets online with automated payments via Stripe, real-time sales tracking, and AI-driven pricing. Customize events with branding, dynamic seat maps, and hybrid event ticketing. Optimize revenue with smart analytics, targeted marketing, and flexible donation options. The best ticketing system for concerts, venues, and multi-location events, available in 46 countries.' },
        { name: 'keywords', content: 'AI ticketing system, event ticketing platform, smart ticketing for promoters, AI-powered event management, sell tickets online, automated ticket sales, Stripe ticketing, event revenue optimization, dynamic pricing for tickets, best ticketing system for concerts, event payment processing, instant ticket payments, AI-driven pricing strategies, online event ticket sales, multi-currency ticketing, ticket sales analytics, AI-powered marketing, real-time sales tracking, audience engagement tools, custom branding for events, white-label ticketing, hybrid event ticketing, live streaming ticket sales, multi-location event management, global ticketing system' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Lookport LTD' },
        { property: 'og:title', content: 'Lookport Ticketing – AI-Driven Event Ticketing System' },
        { property: 'og:description', content: 'Sell more tickets with Lookport: AI-powered marketing, detailed analytics, and automated payments. A smarter way to manage event ticketing.' },
        { property: 'og:image', content: 'https://lookport-previewdeploy.netlify.app/preview.jpg' },
        { property: 'og:image:width', content: '1500' },
        { property: 'og:image:height', content: '844' },
        { property: 'og:url', content: 'https://ticketing.lookport.live/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lookport Ticketing' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lookport Ticketing – The AI Ticketing Solution for Event Promoters' },
        { name: 'twitter:description', content: 'Use AI-driven marketing, analytics, and automation to maximize ticket sales. Lookport is built for promoters.' },
        { name: 'twitter:image', content: 'https://lookport-previewdeploy.netlify.app/preview.jpg' },
        { name: 'twitter:site', content: '@lookport' }
      ],
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
              transform: translateY(100px);
              -webkit-transform: translateY(100px);
              transition: opacity 0.5s ease-out, transform 0.5s ease-out;
              -webkit-transition: opacity 0.5s ease-out, transform 0.5s ease-out;
              will-change: transform;
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
  },
  modules: [
    "@nuxt/image",
  ]
});
