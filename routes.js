const routes = require('next-routes')
const Router = require('nextjs-dynamic-routes')

const router = new Router()

router.add({ name: "home", pattern: "/", page: "/index" })
router.add({ name: 'login', pattern: "/login", page: "/login" })
router.add({ name: 'register', pattern: "/register", page: "/register" })
router.add({ name: 'category', pattern: '/:category', page: "/category" })


module.exports = router