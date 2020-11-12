const express = require('express');
const morgan = require('morgan');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const userRouter = require('./routes/userRouter');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(
  express.urlencoded({
    extended: true,
    limit: '10kb'
  })
);

app.use('/api/v1/users', userRouter);

module.exports = app;
