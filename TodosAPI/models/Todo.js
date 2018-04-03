const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todosAPI');
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;