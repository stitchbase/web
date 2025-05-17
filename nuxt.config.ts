import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-12',
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  disqus: {
    shortname: "your-disqus-shortname",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxthq/studio",
    "nuxt-disqus",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
