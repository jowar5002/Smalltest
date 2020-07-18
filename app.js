const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const DOMParser = require('dom-parser');
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));


var domParser = new DOMParser();​​



app.listen(3000, function(req, res) {
  console.log("server is running in port 3000");
});
