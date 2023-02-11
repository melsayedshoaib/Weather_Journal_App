// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require("express");

// Cors for cross origin allowance

const cors = require("cors");

const bodyParser = require("body-parser");

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

// Initialize the main project folder
app.use(express.static("website"));

// Spin up the server
// Callback to debug

const port = 8000;

const server = app.listen(port, listening);

// Initialize all route with a callback function

function listening() {
  console.log(`server running on port: ${port}`);
}

// Callback function to complete GET '/all'

app.get("/all", sendData);

function sendData(req, res) {
  res.send(projectData);
}

// Post Route

app.post("/add", addData);

function addData(req, res) {
  let data = req.body;
  console.log(`server side data `, data);
  projectData["date"] = data.date;
  projectData["temp"] = data.temp;
  projectData["feel"] = data.feeling;
  res.send(projectData);
}
