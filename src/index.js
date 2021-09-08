const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {

}

app.post('/users', (request, response) => {
  const { name, username} = request.body;

  const user = {
    id: uuidv4(),
    name, 
    username, 
    todos: []
  }

  users.push(user);

  response.status(201).send(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { username } = request.header;

  const user = user.find((e => username == e.username));

  response.send(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;