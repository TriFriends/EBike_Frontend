const next = require('next')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const express = require('express')
const routes = require('./routes')

const handler = routes.getRequestHandler(app)
app.prepare().then(() => {
    //app.setAssetPrefix(process.env.RESOURCE_URL)
    express().use(handler).listen(process.env.URL || 3000)
})

