const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })

const express = require('express')


routes.then((value) => {
    const handler = value.router.getRequestHandler(app)
    app.prepare().then(() => {
        express().use(handler).listen(process.env.URL || 3000)
    })
})




