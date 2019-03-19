const routes = require('next-routes')
const Router = require('nextjs-dynamic-routes')

const router = new Router()

router.add({ name: "home", pattern: "/", page: "/index" })
router.add({ name: 'category', pattern: '/:category', page: "/category" })


module.exports = router