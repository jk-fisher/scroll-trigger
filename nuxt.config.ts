// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  typescript: {
    shim: false,
  },
  css: ["@/styles/main.css"],
};
