const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const todoRoutes = require('./routes/todos');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/todos', todoRoutes);


app.use((req, res, next) => {
  let err = new Error('Not found.');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(3001, () => {
  console.log('API running on port 3001');
});