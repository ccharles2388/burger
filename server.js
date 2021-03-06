require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const {PORT = 3000} = process.env;

// const PORT = 3000;

// const port = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public"
// directory in the application directory.
app.use(express.static('public'));

// app.use(bodyParser.urlencoded({ extended: false }));
// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride("_method"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Routes And Give Access To Them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start Server And Listening On Active Server Port
app.listen(PORT, function() {
    console.log(`SERVER LISTENING ON: http://localhost:${PORT}`);
    console.log('----------------------------');
  });

