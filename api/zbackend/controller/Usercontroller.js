let Users = require("../models/UserData");
const { v4: uuidv4 } = require("uuid");

const GetAllUser = (req, res) => {
  res.status(200).send(Users);
};

const PostUser = (req, res) => {
  const newUser = { id: uuidv4(), ...req.body };
  Users.push(newUser);
  res
    .status(200)
    .json({ message: "user was inserted successfully", newUser: newUser });
};

const UpdateUser = (req, res) => {
  const Id = req.params.id;
  const { name, desc, active } = req.body;
  const selectedUser = Users.filter((user) => user.id == Id);

  selectedUser.map((Suser) => {
    (Suser.name = name), (Suser.desc = desc), (Suser.active = active);
  });
  res.status(200).send(Users);
};

const DeleteUser = (req, res) => {
  const Id = req.params.id;
  Users = Users.filter((user) => user.id !== Id);
  res.status(200).send(Users);
};

module.exports = { GetAllUser, PostUser, UpdateUser, DeleteUser };
