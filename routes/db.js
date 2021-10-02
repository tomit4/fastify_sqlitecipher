const db = require('../db/sqlite')

module.exports = async fastify => {
    fastify.route({
        method: 'GET',
        url: '/db',
        //preHandler: fastify.auth[fastify.authenticate],
        handler: async (request, reply) => {
            reply.header('Content-Type', 'application/json')
            await db.all(`SELECT * FROM peoples`, [], (err, rows) => {
                return reply.send(rows)
            })
        },
    })
}
