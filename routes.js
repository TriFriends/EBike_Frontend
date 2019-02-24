const routes = require('next-routes')

module.exports = routes()
    .add({ name: 'home', pattern: '/', page: 'index' })
    .add({ name: 'category', pattern: '/category/:category', page: 'category' })