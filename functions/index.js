//index.js

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    editTodo,
    deleteTodo
} = require('./APIs/todos');

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users');

const auth = require('./util/auth');

app.get('/todos', auth, getAllTodos);
app.post('/todo', auth, postOneTodo);
app.put('/todo/:todoId', auth, editTodo);
app.delete('/todo/:todoId', auth, deleteTodo);


app.post('/login', loginUser);
app.post('/signup', signUpUser);

app.post('/user/image', auth, uploadProfilePhoto);
app.post('/user', auth, updateUserDetails);
app.get('/user', auth, getUserDetail);

exports.api = functions.https.onRequest(app);
