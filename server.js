const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from x86 node app");
});

const PORT = process.env.PORT | 4002;

const server = app.listen(PORT, () => {
  console.log("listening on port", server.address().port);
});

