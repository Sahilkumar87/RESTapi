const express = require('express');
const todoRoute = express.Router();


const todoItemController = require("../controllers/todoItemController");

todoRoute.get("/", todoItemController.getTodoItems);
todoRoute.post("/", todoItemController.createItem);
todoRoute.delete("/:id", todoItemController.deleteTodoItems);
todoRoute.put("/:id/completed", todoItemController.markCompleted);

module.exports = todoRoute;