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
  if (errorMessage.length) {
    return res.status(422).send({ answer: errorMessage });
  }
  try {
    return (await expenses.create(req.body)) && (await this.get(req, res));
  } catch (err) {
    return res.status(422).send({ answer: err });
  }
};

// remove
exports.remove = (req, res) => {
  const { id } = req.params;
  if (!id || !id.trim()) {
    res.status(422).send({ answer: "Id is not valid" });
  }
  expenses
    .destroy({ where: { id } })
    .then(async (removed) => {
      if (removed) {
        const leftOvers = await expenses.findAll();
        return res.send(leftOvers);
      }
      return res.status(404).send({ answer: "Item not found" });
    })
    .catch((err) => {
      return res.status(422).send({ answer: err });
    });
};
