const axios = require("axios");
var postData = require("../model/order_model");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// Printing using V4 Print API
// Basic implementation
exports.place_order = (req, res) => {
  console.log("I am testing with the name: " + req.body.name);

  postData.recipient.name = req.body.name;
  postData.recipient.address.line1 = req.body.line1;
  postData.recipient.address.postalOrZipCode = req.body.postalOrZipCode;
  postData.recipient.address.townOrCity = req.body.townOrCity;
  postData.recipient.address.stateOrCounty = req.body.stateOrCounty;
  postData.items[0].assets[0].url = req.body.imageURL;

  // ----- Debug -----
  postData.recipient.address.line2 = req.body.line2;
  // postData.recipient.address.countryCode = req.body.countryCode;

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.API_KEY,
    },
  };

  console.log(postData.items[0].assets[0].url);
  var temp = postData.items[0].assets[0].url;
  console.log(temp);
  console.log(req.body.imageURL);
  console.log(req.body);

  axios
    .post("https://api.sandbox.prodigi.com/v4.0/Orders", postData, axiosConfig)
    .then(function (res) {
      console.log("Print order submitted");
      console.log(postData.recipient.address.countryCode);
      console.log(req.body.countryCode);
    })
    .catch(function (error) {
      console.log(error.response.statusText);
      console.log(postData.recipient.address.countryCode);
      console.log(error.response.data);
    });
  res.redirect("/");
};
