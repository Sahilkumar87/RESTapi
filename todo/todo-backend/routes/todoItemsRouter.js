const express = require('express');
const todoRoute = express.Router();


const todoItemController = require("../controllers/todoItemController");

todoRoute.get("/", todoItemController.getTodoItems);
todoRoute.post("/", todoItemController.createItem);

module.exports = todoRoute;