const express = require("express");
const path = require("path");

// Set-up the server
const app = express();

// Compiled code
app.use("/", express.static(path.join(__dirname, "..", "build")));

// Start the server
const SERVER_PORT = "9999";

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening to port ${SERVER_PORT}`);
});
