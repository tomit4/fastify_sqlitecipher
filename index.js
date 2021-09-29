'use strict'

const fastify = require('fastify')() //({ logger: true })

// Register Plugins/Routes
fastify.register(require('./routes/peoples'))

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    const port = fastify.server.address().port
    // Server is now listening on ${address}
    console.log(`Server is now listening on ${port}`)
})
