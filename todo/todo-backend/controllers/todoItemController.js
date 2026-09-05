const todoItem = require("../models/todoItem");

exports.createItem = async (req, res, next) => {
    console.log(req.body);
    const {task, date} = req.body;
    const todoItem = new todoItem({task, date});
    await todoItem.save();
    res.status(201).json(todoItem);
}


exports.getTodoItems = async (res, req, next) => {
    const todoItems = await todoItem.find();
    res.json(todoItems);
}