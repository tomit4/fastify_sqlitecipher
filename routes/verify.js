module.exports = async fastify => {
    fastify.route({
        method: 'POST',
        url: '/verify',
        handler: async (request, reply) => {
            //reply.header('Content-Type', 'application/json')
            const { passwd } = await request.body // possible thanks to fastify-formbody
            if (passwd === process.env.DB_PASS) {
                const token = await reply.jwtSign({
                    passwd: process.env.DB_PASS,
                })
                // Does the job, but cannot redirect after setting cookie, browser hangs on response
                // if used in conjunction with .redirect()

                // Course of Action:  use reply.sendFile() to send to html page that renders the db
                // while also having the authentication cookie/jwt in the headers
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
