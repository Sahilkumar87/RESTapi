// Core Module
const path = require('path');

// External Module
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const DB_PATH = "mongodb+srv://root:root@completecoding.u1asz.mongodb.net/todo?retryWrites=true&w=majority&appName=CompleteCoding";

//Local Module
const todoItemRouter = require('./routes/todoItemsRouter')
const errorsController = require('./controllers/errors');
const app = express();






// body-parser import karne ki zaroorat nahi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/todo", todoItemRouter);
app.use(errorsController.pageNotFound);

const PORT = 3001;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
