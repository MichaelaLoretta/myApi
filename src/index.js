const fastify = require("fastify")({ logger: true });

const routes = require('./routes/courseRoutes')

const mongoose = require("mongoose");

//DATABASE CONNECTION

mongoose
  .connect(
    "mongodb+srv://MichaelaLoretta:z7LKw2eQ1VYPEoNa@cluster0.gj3jlhg.mongodb.net/test"
  )
  .then(console.log("DATABASE Running"))
  .catch((err) => console.log(err));

//ROUTES
//since routes is an array, i can just loop thru it

routes.forEach((route) => {
    fastify.route(route)
})

//SERVER CONNECTION
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is Running At 3000`);
  } catch (error) {
    fastify.log.error
    process.exit(1);
  }
};

start();
