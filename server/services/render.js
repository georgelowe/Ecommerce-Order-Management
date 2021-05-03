const axios = require("axios");

// Get all orders in the database and render in index.js
exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/orders")
    .then(function (response) {
      res.render("index.ejs", { orders: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// Render the add order page with form
exports.add_order = (req, res) => {
  res.render("add_order.ejs");
};

// Render the update order page with form
exports.update_order = (req, res) => {
  axios
    .get("http://localhost:3000/api/orders", {
      params: { id: req.query.id },
    })
    .then(function (orderdata) {
      res.render("update_order.ejs", { order: orderdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
