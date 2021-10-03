# SQLiteCipher with Fastify

Not Completed. Experimenting with JWT, Fastify, SQLiteCipher, Petite-Vue, and Pug.
UPDATE: I got a basic login functionality going where I can display the SQLiteCipher Database in JSON. I'm having some trouble figuring out how to redirect after the cookie creation is successful as I need to POST to a url that just creates a JWT and stores it in a session cookie. Fastify does not provide easily found documentation for how to redirect from a route that has produced authentication headers. I had considered a hacky way of doing this by redirecting from an empty HTML page, but that just felt wrong.

Nevertheless, some progress has been made in getting the cookie to hold onto the JWT and pass that to other routes, now there is just the matter of displaying it on the front end and accomplishing logout funcitonality (perhaps fastify-session will be necessary...).

I find myself liking fastify and its malleable syntax, it can be written a bit like Hapi or Express.

UPDATE on Petite-Vue: There is not alot of documentation about Petite_Vue, but I found a nice video by swildermuth that helped explain quite a bit:
[Coding Shorts: Introducing petite-vue](https://www.youtube.com/watch?v=YL9gkm-Ihpk)

UPCOMING: Figure out how to redirect after cookie has been sent from POST route, get it to dynamically generate a list of people on the index.html with petite-vue.

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

-fastify-jwt

-fastify-cookie

Developer Dependencies:

nodemon

pug
