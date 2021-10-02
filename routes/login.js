const path = require('path')

module.exports = async fastify => {
    fastify.route({
        method: 'GET',
        url: '/login',
        handler: async (request, reply) => {
            reply.header('Content-Type', 'text/html')
            reply.type('text/html')
            return reply.sendFile('index.html')
        },
    })
}
