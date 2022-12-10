const mongoose = require("mongoose");

//model and schema in one

const destinationSchema = new mongoose.Schema({

  name: String,
  district: String,
  latitude: Number,
  longitude: Number,
  
});

module.exports = mongoose.model("Destination", destinationSchema);
