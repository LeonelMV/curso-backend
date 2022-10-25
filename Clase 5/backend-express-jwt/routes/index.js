'use strict'

const express = require('express');
const api = express.Router();

//Middleware de autenticacion basada en token
const { isAuth } = require("../middlewares");

/* Controllers */
const { userController, productsController } = require("../controllers");

const { userSchema } = require("../controllers/schemas");

/** BEGIN ROUTES **/

api.post("/login", userController.signIn);
api.post("/register", userSchema, userController.signUp);

api.get("/hi", isAuth, userController.sayHi);

api.get("/products", productsController.getProducts);
api.post("/products", productsController.createProduct);
api.put("/products/:id", productsController.updateProduct);
api.delete("/products/:id", productsController.deleteProduct);

/** END ROUTES **/

module.exports = api;
