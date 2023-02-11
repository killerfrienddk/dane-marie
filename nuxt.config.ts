export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'server',
    server: {
        host: (process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1')
    },
    head: {
        title: 'Dane-Marie',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/styles/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/font-awesome.ts', mode: 'client'},
        {src: '~/plugins/constants.ts'},
        {src: '~/plugins/guid.ts'},
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxt/postcss8',
        '@nuxtjs/composition-api/module',
    ],


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'google-fonts'
    ],
    googleFonts: {
        families: {
            Roboto: true
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {}
            }
        },
        babel: {
            compact: process.env.NODE_ENV === 'production',
        },
    },
}
