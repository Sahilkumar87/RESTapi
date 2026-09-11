const todoItem = require("../models/todoItem");
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

exports.deleteTodoItems = async (req, res, next) => {
    const {id } = req.params;
    await todoItem.findByIdAndDelete(id);
    ;res.status(204).json({_id: id});
}

exports.markCompleted = async (req, res, next) => {
    const { id } = req.params;
    const todoItem = await todoItem.findByIdAndDelete(id);
    await todoItem.save();
    res.json(todoItem);
}


