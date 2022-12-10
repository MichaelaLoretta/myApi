const destinationController = require('../controllers/destinationController')

const routes = [
  {
    method: "GET",
    url: "/destinations",
    handler: destinationController.getDestinations
  },
  {
    method: "GET",
    url: "/destination/:id",
    handler: destinationController.getDestination,
  },
  {
    method: "POST",
    url: "/destinations/new",
    handler: destinationController.addDestination
  },
  {
    method: "DELETE",
    url: "/destinations/delete/:id",
    handler: destinationController.deleteDestination
  },
];

module.exports = routes