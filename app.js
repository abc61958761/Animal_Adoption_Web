const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const usePassport = require('./config/passport');

const userRouter = require('./routes/userRouter');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(express.json({ limit: '10kb' }));
app.use(
  express.urlencoded({
    extended: true,
    limit: '10kb'
  })
);

usePassport(app);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.user = req.user;
    next();
  });

app.use('/api/v1/users', userRouter);

module.exports = app;
