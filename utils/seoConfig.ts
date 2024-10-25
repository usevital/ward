// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: "https://ward-pwa.ward-5br.pages.dev/", // Change this to your production URL.
  description:
    "Ward is a tool for simple text operations, like flipping text or becoming cat girl.", // Change this to be your website's description.
  type: "website",
  image: {
    url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
    alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
    width: 1200,
    height: 630,
  },
  siteName: "Ward", // Change this to your website's name,
  twitter: {
    card: "summary_large_image",
  },
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "Ward", // Change this to your website's name.
  short_name: "Ward", // Change this to your website's short name.
  description:
    "Ward is a tool for simple text operations, like flipping text or becoming cat girl.", // Change this to your websites description.
  theme_color: "#01b477", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
}
