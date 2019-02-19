const routes = require('next-routes')

class Routing {
    constructor() {
        this.router = routes()
        this.router.add({ name: 'main', pattern: '/', page: 'index' })
    }
    addRoute({ name, pattern, page }) {
        this.router.add({ name, pattern, page })
    }
}

module.exports = routes()

