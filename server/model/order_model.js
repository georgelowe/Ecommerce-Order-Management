// Accepted format by print API
var postData = {
  shippingMethod: "Budget",
  recipient: {
    address: {
      line1: "14 test place",
      line2: "test",
      postalOrZipCode: "12345",
      countryCode: "US",
      townOrCity: "somewhere",
      stateOrCounty: "somewhereelse",
    },
    name: "John Smith",
    email: "Example@example.com",
  },
  items: [
    {
      sku: "GLOBAL-FAP-16x24",
      copies: 1,
      sizing: "fillPrintArea",
      assets: [
        {
          printArea: "default",
          url: "https://i.imgur.com/bUR6ym8.jpeg",
        },
      ],
    },
  ],
};

module.exports = postData;
