const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const verifyToken = require('./auth/verifyToken');

const user = require('./routes/user');
const customer = require('./routes/cust');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', user);
app.use('/api/customer', customer);

app.get('/', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('Krizo code running on port 3000.'));