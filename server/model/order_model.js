// Accepted format by print API
var postData = {
  shippingMethod: "Budget",
  recipient: {
    address: {
      line1: "Buckingham Palace",
      line2: "Buckingham Palace Road",
      postalOrZipCode: "SW1A 1AA",
      countryCode: "GB",
      townOrCity: "London",
      stateOrCounty: "London",
    },
    name: "Queen Elizabeth",
    email: "Example@example.com",
  },
  items: [
    {
      sku: "GLOBAL-FAP-A4",
      copies: 1,
      sizing: "fillPrintArea",
      assets: [
        {
          printArea: "default",
          url: "https://imgur.com/ACF0GuK",
        },
      ],
    },
  ],
};

module.exports = postData;
