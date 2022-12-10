const Destination = require("../models/Destination");

exports.getDestinations = async (req, reply) => {
  try {
    const destinations = await Destination.find();
    return destinations;
  } catch (error) {
    console.log(error);
  }
};

exports.getDestination = async (req, reply) => {
  try {
    const destination = await Destination.findById(req.params.id);
    return destination;
  } catch (error) {
    console.log(error);
  }
};

exports.addDestination = async (req, reply) => {
  try {
    const newDestination = new Destination(req.body);
    return newDestination.save();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteDestination = async (req, reply) => {
  try {
    const deletedDestination = Destination.findByIdAndDelete(req.params.id);
    return deletedDestination;
  } catch (error) {
    console.log(error);
  }
};
