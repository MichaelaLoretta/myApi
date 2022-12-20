const mongoose = require("mongoose");

//model and schema in one

const destinationSchema = new mongoose.Schema({

  name: {type: String, required: true},
  district: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  
});

module.exports = mongoose.model("Destination", destinationSchema);
