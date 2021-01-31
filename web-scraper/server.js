/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/scrape", (req, res) => {
  const { url } = req.body;
  axios(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch(console.error);
});

app.listen(5000, () => {
  console.log("Server running on Port 5000");
});
