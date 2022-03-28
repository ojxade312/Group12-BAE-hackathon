var express = require('express');
var router = express.Router();

import getAllUsers from '../models/users';

const usersRouter = express.Router();
usersRouter.use(express.json());

/* GET users listing. */
usersRouter.get('/', function(req, res) {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

module.exports = usersRouter;
