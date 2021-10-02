const db = require('../db/sqlite')
//const fastifyAuth = require('fastify-auth')

module.exports = async fastify => {
    //await fastify
    //.decorate('authenticate', async (request, reply) => {
    //try {
    //await request.jwtVerify()
    //} catch (err) {
    //reply.send(err)
    //}
    //})
    //.register(fastifyAuth)
    //.after(() => {
    fastify.route({
        method: 'POST',
        url: '/loggedin',
        //preHandler: fastify.auth([fastify.authenticate]),
        handler: async (request, reply) => {
            const { passwd } = await request.body
            if (passwd === process.env.DB_PASS) {
                reply.redirect('/db')
            }
            reply.redirect('/login')

            //if (!passwd) {
            //reply.status(400).send({ msg: 'Please Enter a Password' })
            //}
            //const token = await fastify.jwt.sign(
            //{ passwd },
            //{ expiresIn: '2s' },
            //)
            //reply.send({ msg: token, password: passwd })
            //reply.redirect('/db')
        },
    })
    //})
}

/*

async function AuthRouter(fastify) {
    6     fastify.post('/generateAccessToken', async (req, res) => {
    5         try {
    4             const { passwd } = req.body
    3             if (!passwd) {
    2                 res.status(400).send({ msg: 'Params are missing!' })
    1             }
    0             const token = fastify.jwt.sign({ passwd }, { expiresIn: '1m' })
    1             res.status(200).send(token, passwd)
    2         } catch (err) {
    3             throw err
    4         }
    5     })
    6 }
    7
>>  8 module.exports = AuthRouter

*/
