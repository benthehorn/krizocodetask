const bcrypt = require('bcryptjs');
const SALT_FACTOR = 8;
const User = require('../models/user');

async function registerUser(user) {
  const salt = bcrypt.genSaltSync(SALT_FACTOR);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return User.create(user);
}

async function login(user) {
  const storedUser = await User.findOne({ username: user.username });
  return bcrypt.compareSync(user.password, storedUser.password);
}

module.exports = { registerUser, login };
