import { defineConfig } from "astro/config"

// Astro integration imports
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  site: "https://usevital.github.io/ward/",
  base: "ward",
  integrations: [sitemap(), compress()],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
  },
})
