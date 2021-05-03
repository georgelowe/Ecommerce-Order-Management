// Accepted format by print API
var postData = {
  shippingMethod: "Budget",
  recipient: {
    address: {
      line1: "14 test place",
      line2: "Testing Way",
      postalOrZipCode: "123345",
      countryCode: "UK",
      townOrCity: "somewhere",
      stateOrCounty: "somewhereelse",
    },
    name: "John Smith",
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
