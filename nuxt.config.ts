// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "My title",
      script: [
        { src: "https://unpkg.com/maplibre-gl@3.2.1/dist/maplibre-gl.js" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/maplibre-gl@3.2.1/dist/maplibre-gl.css",
        },
      ],
    },
  },
});
