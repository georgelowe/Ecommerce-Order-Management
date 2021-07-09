const mongoose = require("mongoose");

// To Do: restruture schema to have an address object
var schema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now,
    unique: true,
    required: true,
    immutable: true,
  },
  date: {
    type: String,
    required: true,
    immutable: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  pet_name: String,
  background: String,
  product_type: String,
  artwork_batch: String,
  status: String,
  line1: String,
  line2: String,
  postalOrZipCode: String,
  countryCode: String,
  townOrCity: String,
  stateOrCounty: String,
  imageURL: String,
});

const Orderdb = mongoose.model("orderdb", schema);
module.exports = Orderdb;
