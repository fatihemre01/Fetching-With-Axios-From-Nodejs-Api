const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userFirst", "userSecond", "userThird"] });
});

app.listen(5000, console.log("Running on 5000"));
