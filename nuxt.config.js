import { resolve, join } from 'path'

export default {
  // mode: 'spa',
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pssa-keystone-public',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/qdt.config.js',
    join(resolve(__dirname), '../sdp-vue-components/plugins/qlik.config'),
    '~/plugins/init.store.js',
    { src: '~/plugins/vue-unicons.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['vue-scrollto/nuxt'],

  /**
   * purgeCss:
   * note that the following paths simply add to the default
   */
  purgeCSS: {
    paths: [
      '../sdp-vue-components/components/**/*.vue',
      '../sdp-vue-components/layouts/**/*.vue',
      '../sdp-vue-components/pages/**/*.vue',
      '../sdp-vue-components/plugins/**/*.js',
    ],
    rejected: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.devtool = 'source-map'
      config.resolve.alias['~sdp-components'] = join(
        resolve(__dirname),
        '../sdp-vue-components/components'
      )
      config.resolve.alias['~sdp-plugins'] = join(
        resolve(__dirname),
        '../sdp-vue-components/plugins'
      )
    },
  },
  router: {
    mode: 'hash',
    base: '/extensions/pssa-keystone-public',
    routeNameSplitter: '/',
  },
}
