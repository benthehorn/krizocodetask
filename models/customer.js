const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../config');

const db = mongoose.connect(config.mongoURL);

const custSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

const Cust = mongoose.model('Cust', custSchema);

module.exports = Cust;
