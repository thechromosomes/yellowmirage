export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "haltandlive",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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

  target: "static", // default is 'server'
};
