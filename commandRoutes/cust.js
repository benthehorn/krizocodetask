#!/usr/bin/env node
const program = require('commander');
const { registerNew, login } = require('../commands/user');
const { custNew, custList, custSearch } = require('../commands/customer');

program
  .version('1.0.0')
  .description('Code challenge for Krizo.dk');

program
  .command('registerNew <usename> <password>')
  .alias('register')
  .description('Register a User')
  .action((username, password) => {
    registerNew({ username, password });
  });

program
  .command('logIn <username> <pasword>')
  .alias('login')
  .description('Log in a user')
  .action((username, password) => {
    login({ username, password });
  });

program
  .command('custNew <name> <email> <phone>')
  .alias('new')
  .description('Add a new customer')
  .action((name, email, phone) => {
    custNew({ name, email, phone });
  });

program
  .command('listAll')
  .alias('list')
  .description('List all customers')
  .action(() => {
    custList();
  });

program
  .command('searchAll <str>')
  .alias('search')
  .description('Search by customer name')
  .action((str) => {
    custSearch({ str });
  });

program.parse(process.argv);
