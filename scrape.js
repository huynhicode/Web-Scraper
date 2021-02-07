const fs = require("fs");

const axios = require("axios");

const scrapedDirectory = "scraped-html";

if (!fs.existsSync(scrapedDirectory)) {
  fs.mkdirSync(scrapedDirectory);
}

axios("https://www.dmv.ca.gov").then((res) =>
  fs.writeFileSync(`${scrapedDirectory}/dmv.html`, res.data)
);

axios("https://www.google.com").then((res) =>
  fs.writeFileSync(`${scrapedDirectory}/google.html`, res.data)
);

axios("https://www.nasa.gov").then((res) =>
  fs.writeFileSync(`${scrapedDirectory}/nasa.html`, res.data)
);
