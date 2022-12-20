const Destination = require("../models/Destination");

//GET ALL DESTINATIONS
exports.getDestinations = async (req, reply) => {
  try {
    const destinations = await Destination.find();
    return destinations;
  } catch (error) {
    console.log(error);
  }
};

//GET ONE SPECIFIC DESTINATION

exports.getDestination = async (req, reply) => {
  try {
    const destination = await Destination.findById(req.params.id);
    return destination;
  } catch (error) {
    console.log(error);
  }
};

//ADD DESTINATION 

exports.addDestination = async (req, reply) => {
  try {
    //Creates a new destination and saves it in MongoDB
    const newDestination = new Destination(req.body);
    return newDestination.save();
  } catch (error) {
    console.log(error);
  }
};


// UPDATE DESTINATION

exports.updateDestination = async (req, reply) => {
  try {
    
   const destination = req.body
   const {...updatedDestination} = destination
   const update = await Destination.findByIdAndUpdate(req.params.id, updatedDestination, {new: true})
   return update

  } catch (error) {
    console.log(error);
  }


};

//DELETE A DESTINATION

exports.deleteDestination = async (req, reply) => {
  try {
    const deletedDestination = Destination.findByIdAndDelete(req.params.id);
    return deletedDestination;
  } catch (error) {
    console.log(error);
  }
};
