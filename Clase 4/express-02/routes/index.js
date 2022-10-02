'use strict'

const express = require('express');
const api = express.Router();

/* Controllers */
const { userController } = require("../controllers");

/** BEGIN ROUTES **/

api.get("/users", userController.getUsers);
api.post("/users", userController.createUser);
api.put("/users", userController.updateUser);
api.delete("/users", userController.deleteUser);

/** END ROUTES **/

module.exports = api;
