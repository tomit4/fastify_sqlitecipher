const db = require('../db/sqlite')

module.exports = async fastify => {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: async (request, reply) => {
            reply.header('Content-Type', 'application/json')
            await db.all(`SELECT * FROM peoples`, [], (err, rows) => {
                reply.send(rows)
            })
        },
    })
}
