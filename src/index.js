require("dotenv").config();

const fastify = require("fastify")({ logger: true });

const routes = require("./routes/destinationRoutes");

const mongoose = require("mongoose");


//DATABASE CONNECTION

mongoose
  .connect(
    process.env.DATABASE_URL
  )
  .then(console.log("DATABASE Running"))
  .catch((err) => console.log(err));

//ROUTES
//since routes is an array, i can just loop thru it

routes.forEach((route) => {
  fastify.route(route);
});

//SERVER CONNECTION
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is Running`);
  } catch (error) {
    fastify.log.error;
    process.exit(1);
  }
};

start();
