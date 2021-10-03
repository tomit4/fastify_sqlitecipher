module.exports = async fastify => {
    fastify.route({
        method: 'POST',
        url: '/verify',
        handler: async (request, reply) => {
            //reply.header('Content-Type', 'application/json')
            const { passwd } = await request.body
            if (passwd === process.env.DB_PASS) {
                const token = await reply.jwtSign({
                    passwd: process.env.DB_PASS,
                })
                reply
                    .setCookie('token', token, {
                        domain: 'localhost',
                        path: '/db',
                        secure: false, // set true in production
                        httpOnly: true,
                        sameSite: true,
                        maxAge: 900, // cookie expires in 15 minutes
                    })
                    .code(200)
                    .send({ token: token, cookies: request.cookies })
                //.redirect('/db')
            }
        },
    })
}
