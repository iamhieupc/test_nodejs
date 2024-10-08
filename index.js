const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! test 31");
});

app.listen(port, () => {
  console.log(`Example app listening on port 32 1 ${port}`);
});
