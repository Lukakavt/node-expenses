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
  const { shop, price } = req.body;
  const errorMessage = [];
  if (!shop || !shop.trim()) {
    errorMessage.push("Shop name should be defined");
  }
  if (price <= 0 || isNaN(price)) {
    errorMessage.push("Price is not valid");
  }
  if (errorMessage.length > 0) {
    return res.status(422).send({ answer: errorMessage });
  }
  try {
    return (await expenses.create(req.body)) && (await this.get(req, res));
  } catch (err) {
    return res.status(422).send({ answer: err });
  }
};
