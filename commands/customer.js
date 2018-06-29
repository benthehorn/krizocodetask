const CustomerController = require('../controllers/customer');

const custNew = async (cust) => {
  try {
    const newCust = await CustomerController.createCustomer(cust);
    console.info(newCust);
  } catch (err) {
    console.info(err);
  }
};

const custList = async () => {
  try {
    const allCusts = await Cust.find();
    console.info(allCusts);
  } catch (err) {
    console.info(err);
  }
};

const custSearch = async (word) => {
  try {
    const searched = await Cust.find({ name: word.str });
    console.info(searched);
  } catch (err) {
    console.info(err);
  }
};

module.exports = { custNew, custList, custSearch };
