const routes = require('next-routes')
const { API_URL } = require('./config/consts')
require('isomorphic-fetch')

class Routing {
    constructor() {
        this.router = routes()
        this.router.add({ name: 'Home', pattern: '/', page: 'index' })
    }
    add({ name, pattern, page }) {
        this.router.add({ name, pattern, page })
    }
}

exports.loadPages = () => new Promise((resolve, reject) => {
    const routing = new Routing()
    fetch(API_URL + '/pages')
        .then((pages) => pages.json())
        .then((pages) => {
            console.log(pages)
            for (let i = 0; i < pages.length; i++) {
                routing.add({ name: pages[i].name, path: pages[i].path, pattern: pages[i].name })
            }
            resolve(routing)
        })
})