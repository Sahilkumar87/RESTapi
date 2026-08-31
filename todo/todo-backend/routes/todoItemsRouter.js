const express = require('express');
const todoRoute = express.Router();


const todoItemController = require("../controllers/todoItemController");

todoRoute.post("/", todoItemController.createItem);

module.exports = todoRoute;