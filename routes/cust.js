const express = require('express');
const router = express.Router();
const verifyToken = require('../auth/verifyToken');
const CustController = require('../controllers/customer');
router.post('/', verifyToken, async (req, res) => {
  try {
    const newCust = await CustController.createCustomer(req.body);
    res.status(200).send({ customer: newCust });
  } catch (err) {
    res.send(err);
  }
});

router.get('/', verifyToken, async (req, res) => {
  const customers = await CustController.listCustomers();
  res.status(200).send({ customers: customers });
});

router.get('/search/:str', verifyToken, async (req, res) => {
  const result = await CustController.searchCustomers(req.params.str);
  res.status(200).send({ result: result });
});

module.exports = router;
