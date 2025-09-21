const express = require("express");

const app = express();
app.use("/hello", (req, res) => {
  res.send("hello from ther server");
});
app.use("/test", (req, res) => {
  res.send("hello from ther server1111222222222222");
});
app.listen(3000, () => {
  console.log("server is ruuning on 3000");
});
