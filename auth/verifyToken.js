const jwt = require('jsonwebtoken');
const config = require('../config');

async function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ auth: false, message: 'Token was missing.' });
  try {
    const decoded = await jwt.verify(token, config.secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(500).send({ auth: false, message: 'Authentication Failed.' });
  }
}

module.exports = verifyToken;
