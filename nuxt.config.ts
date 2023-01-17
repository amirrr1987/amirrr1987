// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt', 'nuxt-icon'
    ],

    app: {
        head: {
            title: 'amir maghami',
            meta: [
                {
                    name: 'description',
                    content: 'Every thing about Nuxt 3'
                }
            ],
            link: [
                {
                    rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins'
                }
            ]
        }
    }
})
