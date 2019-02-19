const routes = require('next-routes')

module.exports = routes()
    .add({ name: 'main', pattern: '/', page: 'index' })
