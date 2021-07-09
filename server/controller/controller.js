var Orderdb = require("../model/model");

// Create a new order and save to database
exports.create = (req, res) => {
  // Validate that new order request data exists
  if (!req.body) {
    res.status(400).send({ message: " Content cannot be empty" });
    return;
  }

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();

  function capitalise(string) {
    return string
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }
  const order = new Orderdb({
    date: today.toLocaleString("en-US", options),
    customer_name: capitalise(req.body.customer_name),
    pet_name: capitalise(req.body.pet_name),
    background: capitalise(req.body.background),
    product_type: req.body.product_type,
    artwork_batch: capitalise(req.body.artwork_batch),
    status: req.body.status,
    line1: capitalise(req.body.line1),
    line2: capitalise(req.body.line2),
    postalOrZipCode: capitalise(req.body.postalOrZipCode),
    countryCode: capitalise(req.body.countryCode),
    townOrCity: capitalise(req.body.townOrCity),
    stateOrCounty: capitalise(req.body.stateOrCounty),
    imageURL: req.body.imageURL,
  });

  // Save order in mongoDB database
  order
    .save(order)
    .then((data) => {
      //res.send(data);
      res.redirect("/add-order");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured whilst creating create operation",
      });
    });
};

// retrieve and return all orders / retrieve and return single order
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Orderdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found order with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .message({ message: "error retrieving order with id " + id });
      });
  } else {
    Orderdb.find()
      .then((order) => {
        res.send(order);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error occured while retrieving order information",
        });
      });
  }
};

// Update an existing order by order ID
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to update cannot be empty" });
    return;
  }

  // ID param from the url of the get request
  const id = req.params.id;

  Orderdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot update order with ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating order" });
    });
};

// Delete an order with order ID in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Orderdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: `Cannot delete with id ${id}` });
      } else {
        res.send({
          message: "order deleted succesfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "could not delete order",
      });
    });
};
