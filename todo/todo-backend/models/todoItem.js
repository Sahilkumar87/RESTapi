const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        require: true,

    },
    date: {
        Date,

    },
    completed: {
        type: Boolean,
        default: false,
    },
    timestamps: true,



})



module.exports = mongoose.model("TodoItem", todoSchema);