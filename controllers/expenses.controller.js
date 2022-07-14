const { expenses } = require("../models");

exports.get = async (req, res) => {
  try {
    const all = await expenses.findAll();
    res.json(all);
  } catch (err) {
    res.status(422).send({ answer: err });
  }
};

// add
exports.add = async (req, res) => {
  const { shop } = req.body;
  const { price } = req.body;
  let errorMessage;
  if (!shop || !shop.trim()) {
    errorMessage = "Shop name";
  }
  if (price <= 0 || isNaN(price)) {
    if (!errorMessage) {
      errorMessage = "Price";
    } else {
      errorMessage += " and price";
    }
  }
  if (errorMessage) {
    return res.status(422).send({ answer: `${errorMessage} is not valid` });
  }
  try {
    return (await expenses.create(req.body)) && (await this.get(req, res));
  } catch (err) {
    return res.status(422).send({ answer: err });
  }
};
