module.exports = {
    srcDir: './',
    plugins: ['~plugins/buefy'],
    head: {
        titleTemplate: 'Home',
        meta: [
            { charset: 'utf-8'},
            { name: 'viewport', content: 'width=devide-width, inistial-escale=1'}
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
    },
    css: [
        '@/assets/css/modules/variables.scss'
    ]
} 