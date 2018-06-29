const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config');
const SALT_FACTOR = 8;
mongoose.Promise = global.Promise;

const db = mongoose.connect(config.mongoURL);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
