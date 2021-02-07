const fs = require("fs");

const axios = require("axios");

axios("https://www.dmv.ca.gov").then((res) =>
  fs.writeFileSync("scraped-html/dmv.html", res.data)
);

axios("https://www.google.com").then((res) =>
  fs.writeFileSync("scraped-html/google.html", res.data)
);

axios("https://www.nasa.gov").then((res) =>
  fs.writeFileSync("scraped-html/nasa.html", res.data)
);
