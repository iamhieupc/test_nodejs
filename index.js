const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! test 89");
});

app.listen(port, () => {
  console.log(`Example app listening on port 1 1 ${port}`);
});
