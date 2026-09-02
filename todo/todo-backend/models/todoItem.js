const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({ // 'new' keyword lagana best practice hai
    task: {
        type: String,
        required: true, // ✅ Sahi spelling
    },
    date: {
        type: Date, // ✅ Sahi syntax
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { 
    timestamps: true // Ye automatically createdAt aur updatedAt add karega
});

module.exports = mongoose.model("TodoItem", todoSchema);