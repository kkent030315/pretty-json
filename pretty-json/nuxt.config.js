export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Pretty Json | JSON Beautifizer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css' },
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap'}
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js'
      },
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js'
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue-tippy.js',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['nuxt-highlightjs', {
      style: 'vs2015',
    }],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
