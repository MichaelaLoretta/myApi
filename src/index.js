require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const routes = require("./routes/destinationRoutes");
const mongoose = require("mongoose");


//DATABASE CONNECTION

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DATABASE Running"))
  .catch((err) => console.log(err));


//ROUTES

   routes.forEach((route) => {
  fastify.route(route);
});


//SERVER CONNECTION
const start = async () => {
  fastify.listen({ port: 3000 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log("Error starting server:", err)
    process.exit(1)
  })
};

start();
