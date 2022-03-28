var express = require('express');
var router = express.Router();

import {getAllUsers, getUserById, addUser, updateUser, deleteUser} from '../models/users';

const usersRouter = express.Router();
usersRouter.use(express.json());

/* GET users listing. */
usersRouter.get('/', function(req, res) {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

usersRouter.get("/:id", async function (req, res) {
  let id = req.params.id;
  const user = await getUserById(id);
  res.json(user);
});

usersRouter.post("/", async function (req, res) {
  let newUser = req.body;
  const addedUser = await addUser(newUser);
  res.json(addedUser);
});

usersRouter.put("/:id", async function (req, res) {
  let id = req.params.id;
  let newData = req.body;
  const updatedUser = await updateUser(id, newData);
  res.json(updatedUser);
});

usersRouter.delete("/:id", async function (req, res) {
  let id = req.params.id;
  const deletedUser = await deleteUser(id);
  res.json(deletedUser);
});

module.exports = usersRouter;
