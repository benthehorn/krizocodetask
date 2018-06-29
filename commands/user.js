const bcrypt = require('bcryptjs');
const SALT_FACTOR = 8;
const UserController = require('../controllers/user');

const registerNew = async (user) => {
  try {
    const newUser = await UserController.registerUser(user);
    console.info(newUser);
  } catch (err) {
    console.info(err);
  }
};

const login = async (user) => {
  let isValid = false;
  try {
    isValid = await UserController.login(user) ? console.info('User logged in.') : console.info('Log in failed');
  } catch (err) {
    console.info(err);
  }
};

module.exports = { registerNew, login };
