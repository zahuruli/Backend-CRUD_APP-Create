const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users.route");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Router not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "server error" });
});

module.exports = app;
