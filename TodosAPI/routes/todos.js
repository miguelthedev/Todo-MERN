const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', (req, res, next) => {
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  // console.log(req.body);
  Todo.create(req.body)
    .then(todos => res.status(201).send(todos))
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});

module.exports = router;