const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
const print_controller = require("../controller/print_controller");

// Home route
route.get("/", services.homeRoutes);

// Add order route
route.get("/add-order", services.add_order);

// Update order route
route.get("/update-order", services.update_order);

// Order DB API
route.post("/api/orders", controller.create);
route.get("/api/orders", controller.find);
route.put("/api/orders/:id", controller.update);
route.delete("/api/orders/:id", controller.delete);

// Printing API
route.post("/", print_controller.place_order);

module.exports = route;
