const Cust = require('../models/customer');

async function createCustomer(customer) {
  return Cust.create(customer);
}

async function listCustomers() {
  return Cust.find();
}

async function searchCustomers(str) {
  return Cust.find({ name: str });
}

module.exports = { createCustomer, listCustomers, searchCustomers };
