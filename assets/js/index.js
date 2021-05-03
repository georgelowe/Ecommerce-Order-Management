// Form Elements
const add_address_selector = document.getElementById("add_address_selector");
const hidden_fields = document.querySelectorAll(".hidden-address-inputs");
const bg_input = document.getElementById("background-input");
const form = document.getElementById("order-form");

// Form Colour Button Elements
var white_btn = document.getElementById("white");
var eggshell_btn = document.getElementById("eggshell");
var midnight_blue_btn = document.getElementById("midnight-blue");
var forest_green_btn = document.getElementById("forest-green");
var charcoal_btn = document.getElementById("charcoal");
var lemon_btn = document.getElementById("lemon");
var grey_btn = document.getElementById("grey");
var new_colour_btn = document.getElementById("new-colour");

// Colour Variables
const white = "#ffffff";
const eggshell = " #d6dedb";
const midnight_blue = "#345060";
const forest_green = " #55715e";
const charcoal = "#404040";
const lemon = "#ddd866";
const grey = "#b3b4b6";

// JQuery add order
$("#add_order").submit(function (event) {
  const form_error = document.getElementById("form-error");
  form_error.textContent = "New Order Has Been Created";
});

// Jquery delete an order from database
if (window.location.pathname == "/") {
  $ondelete = $(" a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/orders/${id}`,
      method: "DELETE",
    };

    if (confirm("Are you sure you want to delete this order?")) {
      $.ajax(request).done(function (response) {
        window.location.href = window.location.href;
      });
    }
  });
}

// JQuery for submitting an update on an existing order
$("#update_order").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  var request = {
    url: `http://localhost:3000/api/orders/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    const form_error = document.getElementById("form-error");
    form_error.textContent = "Order Has Been Updated";
  });
});

// Add Event Listeners to Colour Buttons
white_btn &&
  white_btn.addEventListener("click", function () {
    bg_input.value = "White";
    form.style.border = "10px " + white + " solid";
  });

eggshell_btn &&
  eggshell_btn.addEventListener("click", function () {
    bg_input.value = "Eggshell";
    form.style.border = "10px " + eggshell + " solid";
  });

midnight_blue_btn &&
  midnight_blue_btn.addEventListener("click", function () {
    bg_input.value = "Midnight Blue";
    form.style.border = "10px " + midnight_blue + " solid";
  });

forest_green_btn &&
  forest_green_btn.addEventListener("click", function () {
    bg_input.value = "Forest Green";
    form.style.border = "10px " + forest_green + " solid";
  });

charcoal_btn &&
  charcoal_btn.addEventListener("click", function () {
    bg_input.value = "Charcoal";
    form.style.border = "10px " + charcoal + " solid";
  });

lemon_btn &&
  lemon_btn.addEventListener("click", function () {
    bg_input.value = "Lemon";
    console.log("lemon");
    form.style.border = "10px " + lemon + " solid";
  });

grey_btn &&
  grey_btn.addEventListener("click", function () {
    bg_input.value = "Grey";
    form.style.border = "10px " + grey + " solid";
  });

new_colour_btn &&
  new_colour_btn.addEventListener("click", function () {
    bg_input.value = "Preview All Colours";
    form.style.border = "10px " + "#F7E5EA" + " dashed";
  });

add_address_selector &&
  add_address_selector.addEventListener("change", function () {
    if (add_address_selector.value == "true") {
      hidden_fields.forEach(function (field) {
        field.style.display = "block";
      });
    }
    if (add_address_selector.value == "false") {
      console.log("hide");
      hidden_fields.forEach(function (field) {
        field.style.display = "none";
      });
    }
  });
