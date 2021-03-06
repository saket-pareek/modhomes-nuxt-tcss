export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "modhomes-nuxt-tcss",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        script: [
            {
                src: "//code.jquery.com/jquery-1.11.0.min.js",
                body: true
            },
            {
                src: "js/index.js",
                body: true
            },
            {
                src: "js/slick.min.js",
                body: true
            }
        ],
        link: [
            { href: "//fonts.googleapis.com/css?family=Roboto" },
            {
                href:
                    "//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/css/font-awesome.css",
        "~/assets/slick/slick.css",
        "~/assets/slick/slick-theme.css",
        "~/assets/scss/app.scss"
    ],

    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {}
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};
