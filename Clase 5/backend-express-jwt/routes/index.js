'use strict'

const express = require('express');
const api = express.Router();

//Middleware de autenticacion basada en token
const { isAuth } = require("../middlewares");

/* Controllers */
const { userController } = require("../controllers");

const { userSchema } = require("../controllers/schemas");


/** BEGIN ROUTES **/

api.post("/login", userController.signIn);
api.post("/register", userSchema, userController.signUp);

api.get("/hi", isAuth, userController.sayHi);

/** END ROUTES **/

module.exports = api;
