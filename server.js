var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var express = require("express");
var bodyParser = require("body-parser");

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});