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
  if (!shop || !price || price <= 0 || isNaN(price)) {
    return res.status(422).send({ answer: "Shop name or price isn't valid!" });
  }
  try {
    return (await expenses.create(req.body)) && (await this.get(req, res));
  } catch (err) {
    return res.status(422).send({ answer: err });
  }
};
