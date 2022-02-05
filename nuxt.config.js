export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nature roar",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },

      // seo
      {
        hid: "description",
        name: "description",
        content: "we are trying to make eco friendly and peaceful living",
      },
      {
        hid: "og:Nature roar",
        property: "og:Nature roar",
        content: "Nature roar",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [
      {
        src: "/assets/js/gSap.js",
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/static/assets/css/style.css",
    "~/static/assets/css/style.css",
    "~/static/assets/vendors/mdi/css/materialdesignicons.min.css",
    "~/static/assets/vendors/owl.carousel/css/owl.carousel.css",
    "~/static/assets/vendors/owl.carousel/css/owl.theme.default.min.css",
    "~/static/assets/vendors/aos/css/aos.css",
    "~/static/assets/vendors/jquery-flipster/css/jquery.flipster.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: ["@nuxtjs/axios", "@nuxtjs/gtm"],

  plugins: [
    { src: "~/plugins/jsonld", defer: true },
    { src: "@plugins/toast", mode: "client" },
  ],

  // server  middleware for back end api
  // a server middleware that runs only server site
  serverMiddleware: ["~/server-middleware/sendMail"],

  // target: "static", // default is 'server'

  // google tag manger
  gtm: {
    id: "GTM-T2WH949",
    enabled: true,
    debug: true,
    loadScript: true,
  },

  server: {
    port: 3000,
    // configure local area network
    // host: "0.0.0.0",
  },
};
