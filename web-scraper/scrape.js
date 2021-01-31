const fs = require("fs");

const axios = require("axios");

axios("https://www.dmv.ca.gov").then((res) =>
  fs.writeFileSync("dmv.html", res.data)
);

axios("https://www.google.com").then((res) =>
  fs.writeFileSync("google.html", res.data)
);

axios("https://www.nasa.gov").then((res) =>
  fs.writeFileSync("nasa.html", res.data)
);
