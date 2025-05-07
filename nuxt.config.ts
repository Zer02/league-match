// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@picocss/pico"],

  runtimeConfig: {
    // Private variables (not exposed to client-side)
    supabaseKey: process.env.SUPABASE_KEY,

    // Public variables (exposed to client-side)
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
    },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap",
        },
      ],
    },
  },

  modules: ["@nuxtjs/leaflet"],
});