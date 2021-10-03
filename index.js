'use strict'
const path = require('path')
const fastify = require('fastify')({ logger: true })
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

// Register Plugins

// fastify-static allows for use of reply.sendFile() to send static html files
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'html'),
    prefix: '/', // optional: default '/'
})
// fastify-formbody allows form body to be sent via the browser as request.body()
fastify.register(require('fastify-formbody'))

fastify.register(require('fastify-jwt'), {
    secret: process.env.DB_PASS,
    cookie: {
        cookieName: 'token',
    },
})

fastify.register(require('fastify-cookie'))

// Register Routes
fastify.register(require('./routes/login'))
fastify.register(require('./routes/loggedin'))
fastify.register(require('./routes/verify'))

// Start The Server
fastify.listen(process.env.PORT, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    const port = fastify.server.address().port
    // Server is now listening on ${address}
    console.log(`Server is now listening on ${port}`)
})
