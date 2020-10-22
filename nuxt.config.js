export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    // process.env.npm_package_name
    head: {
        title: '爱拼物流',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keyword', content: '拼箱，国际物流，出口拼箱，进口拼箱、进出口拼箱，集装箱、空运拼板' },
            { hid: 'description', name: 'description', content: '国际物流拼箱平台，出口拼箱、进口拼箱，铁运、海运、空运、进出口拼箱，海关报关，集装箱物流，海铁联运物流，门对门' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'ant-design-vue/dist/antd.css',
        '@assets/css/main.less'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/router',
        '~/plugins/log',
        '~/plugins/mixins',
        {
            src: '~/plugins/locale/index',
            ssr: true // 开启服务端渲染
        },
        {
            src: '~/plugins/ant-design-ui',
            ssr: true // 开启服务端渲染
        },
        {
            src: '~/plugins/element-ui',
            ssr: true // 开启服务端渲染
        },
        {
            src: '~/plugins/axios',
            ssr: true // 开启服务端渲染
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt', [
            '@nuxtjs/component-cache',
            {
                max: 10000,
                maxAge: 1000 * 60 * 60
            }
        ]
    ],
    server: {
        port: 8002,
        host: '0.0.0.0'
    },
    axios: {
        proxy: true, // 开启axios跨域行为
        prefix: '/api', // baseUrl
        credentials: true
    },

    proxy: {
        "/testapi": {
            target: "https://api.aipinwuliu.com/",
            changeOrigin: true,
            pathRewrite: {
                "^/testapi": "/"
            },
            ws: false
        },
        '/api/': {
            target: 'https://api.aipinkeji.com',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            },
            ws: false
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        vendor: ['axios', 'vue-i18n'],
        transpile: [/^ant-design-vue/],
        extractCss: {
            allChunks: true
        },
        extend(config, ctx) {

        }
    },
    router: {
        middleware: ['I18N'],
        /**
         * 扩展路由
         * @param {*} routes 
         * @param {*} resolve 
         */
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'home',
                path: '/index',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    },
    /**
     * 定义系统默认的loading效果，或者制定一loading组件
     */
    loading: {
        color: '#f60',
        height: '2px'
    }
}