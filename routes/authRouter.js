async function AuthRouter(fastify) {
    fastify.post('/generateAccessToken', async (req, res) => {
        try {
            const { passwd } = req.body
            const token = fastify.jwt.sign({ passwd }, { expiresIn: '15m' })
            res.status(200).send({ token: token, password: passwd })
        } catch (err) {
            throw err
        }
    })
}

module.exports = AuthRouter
