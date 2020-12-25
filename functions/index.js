//index.js

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    editTodo,
    deleteTodo
} = require('./APIs/todos')

app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.put('/todo/:todoId', editTodo);
app.delete('/todo/:todoId', deleteTodo);
exports.api = functions.https.onRequest(app);
