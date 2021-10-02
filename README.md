# SQLiteCipher with Fastify

Not Completed. Experimenting with JWT, Fastify, SQLiteCipher, Petite-Vue, and Pug. Lots to learn here, and not done yet. I have utilized fastify-jwt and am having difficulty understanding how to pass it back and forth between the server and the browser. Will probably just go with cookies instead...

Otherwise I like fastify and its malleable syntax, it can be written a bit like Hapi or Express.
Petite-Vue... I have yet to play around more with it right now, original counter example remains as an example.

## Installation:

`npm install`

Rename the env-sample and input your own sensitive details
`mv env-sample.txt .env`

`npm run pug`
`npm run start`

## Packages In This Project:

Frontend:
Petite-Vue

Backend:
@journeyapps/sqlcipher
nodemon
dotenv
fastify
-fastify-formbody
-fastify-static
-fastify-jwt (going to probably just use cookies, had a hell of a time getting this NOT working)
-fastify-auth (used in conjunction with fastify-jwt...)
-fastify-plugin

Developer Dependencies:
nodemon
pug
