const routes = require('next-routes')
const { loadConfig } = require('./config/pages')

class Routing {
    constructor() {
        this.router = routes()
        this.router.add({ name: 'Home', pattern: '/', page: 'index' })
    }
    addRoute({ name, pattern, page }) {
        name = name.toLowerCase()
        pattern = pattern.toLowerCase()
        page = page.toLowerCase()
        this.router.add({ name, pattern, page })
    }
}

module.exports = new Promise((resolve, reject) => {
    const routing = new Routing()
    loadConfig().then(pages => {
        for (let i = 0; i < pages.length; i++) {
            routing.addRoute({ name: pages[i].name, pattern: pages[i].path, page: pages[i].name })
        }
        resolve({ router: routing.router, pages })
    })
})
