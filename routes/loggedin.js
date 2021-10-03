const db = require('../db/sqlite')
// reply.redirect() to HERE from /verify
module.exports = async fastify => {
    await fastify
        .decorate('authenticate', async (request, reply) => {
            try {
                await request.jwtVerify(request.cookies.token)
            } catch (err) {
                reply.send(err)
            }
        })
        .after(() => {
            fastify.route({
                method: 'GET',
                url: '/db',
                preValidation: [fastify.authenticate],
                handler: async (request, reply) => {
                    const secret = await request.jwtVerify(
                        request.cookies.token,
                    )
                    if (secret.passwd === process.env.DB_PASS) {
                        reply.header('Content-Type', 'application/json')

                        await db.all(
                            `SELECT * FROM peoples`,
                            [],
                            (err, rows) => {
                                return reply.send(rows)
                            },
                        )
                    }
                },
            })
        })
}
