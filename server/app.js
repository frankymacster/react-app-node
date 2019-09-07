const express = require("express");
const path = require("path");
const data = require("./api/data");
const info = require("./api/info");

// Set-up the server
const app = express();

// Compiled code
app.use("/", express.static(path.join(__dirname, "..", "build")));
app.get("/api/data", data.get);
app.get("/api/info", info.get);

// Start the server
const SERVER_PORT = "9999";

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening to port ${SERVER_PORT}`);
});
