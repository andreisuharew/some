const express = require("express");
const app = express();

const PORT = process.env.PORT || 801;

app.get("/", (req, res) => {
  res.end(`
  <h1>hello</h1>
  `);
});

app.get("/two", (req, res) => {
  res.end("<h1>All good</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running STARTED`);
});
