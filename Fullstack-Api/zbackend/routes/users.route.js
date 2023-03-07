const express = require("express");
const {
  GetAllUser,
  PostUser,
  UpdateUser,
  DeleteUser,
} = require("../controller/Usercontroller");
const Router = express.Router();

Router.get("/", GetAllUser);
Router.post("/", PostUser);
Router.put("/:id", UpdateUser);
Router.delete("/:id", DeleteUser);
module.exports = Router;
