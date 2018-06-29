const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const UserController = require('../controllers/user');
const verifyToken = require('../auth/verifyToken');
const SALT_FACTOR = 8;

router.post('/', async (req, res) => {
  try {
    const newUser = await UserController.registerUser(req.body);
    const token = await jwt.sign({ user: newUser }, config.secret, { expiresIn: 86400 });
    res.status(200).send({ auth: true, token: token });
  } catch (err) {
    res.send(err);

  }
});

router.post('/login', async (req, res) => {
    let isValid = false;
    isValid = await UserController.login(req.body);
    if (!isValid) return res.status(401).send({ auth: false, token: null });
    const token = jwt.sign({ user: user }, config.secret, { expiresIn: 86400 });
    res.status(200).send({ auth: true, token: token });

  });

router.get('/me', verifyToken, async (req, res, next) => {
  const user = await User.findOne({ username: req.user.username });
  console.log('user : ', user);
  if (!user) return res.status(404).send('No User in database.');
  res.status(200).send(user);
});

router.get('/logout', async (req, res) => {
  res.send({ auth: false, token: null });
});

module.exports = router;
