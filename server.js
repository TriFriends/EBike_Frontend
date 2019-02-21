const next = require('next')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const { loadPages } = require('./routes')
const express = require('express')

loadPages().then((routes) => {
    const handler = routes.router.getRequestHandler(app)
    app.prepare().then(() => {
        express().use(handler).listen(process.env.URL || 3000)
    })
})
