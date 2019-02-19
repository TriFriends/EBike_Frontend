const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const { loadConfig } = require('./config/pages')


const express = require('express')

loadConfig().then((config) => {
    app.prepare().then(() => {
        express().use(handler).listen(process.env.URL || 3000)
    })
})

