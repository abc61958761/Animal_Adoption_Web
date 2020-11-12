const passport = require('passport');
const User = require('../models/userModel');
const catchAsync = require('../config/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    confirmPassword
  });
  res.status(201).json({ status: 'success', data: newUser });
});

exports.login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/api/v1/users/login'
});

exports.logout = (req, res) => {
  res.end('logout');
  req.logout();
  // req.flash('success_msg', '你已經成功登出。');
  res.redirect('/api/v1/users/login');
};

// exports.isLogedIn = (req, res, next) => {
//   if (req.isAuthenticated()) return next();
//   // req.flash('warning_msg', '請先登入才能使用！');
//   res.redirect('/login');
// };
