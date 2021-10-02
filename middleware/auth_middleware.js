const fastifyPlugin = require('fastify-plugin')

module.exports = async fastify => {
    await fastify.decorate('authenticate', async (req, res) => {
        try {
            await req.jwtVerify()
        } catch (err) {
            res.send(err)
        }
    })
}
