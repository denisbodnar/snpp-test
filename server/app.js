const express = require("express");
var cors = require("cors");
const NodeCache = require("node-cache");
require('dotenv').config()

const app = express();
const port = 3300;
const fs = require("fs");

const searchCache = new NodeCache();

var corsOptions = {
  origin: process.env.FRONTEND_ORIGIN,
};

let rawdata = fs.readFileSync("data.json");
let data = JSON.parse(rawdata);

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello from test API!");
});

app.get("/products", function (req, res) {
  const { query = "" } = req.query;

  let key = query;
  let cacheEntry = searchCache.get(key);

  if (!cacheEntry) {
    result = data.products;

    if (query) {
      const regEx = RegExp(`${query}+`, "gi");
      result = result.filter((product) => regEx.test(product.name));
    }

    searchCache.set(key, result, 60 * 5);
  } else {
    result = cacheEntry;
  }

  res.send(result);
});

app.get("/products/:id", function (req, res) {
  const [product] = data.products.filter(
    (product) => product.id === req.params.id
  );

  res.send(product);
});

app.get("/promotion", function (req, res) {
  res.send(data.promotion);
});

app.get("/vendors", function (req, res) {
  res.send(data.vendors);
});

module.exports = app;