const { expenses } = require("../models");

exports.get = async (req, res) => {
  try {
    const all = await expenses.findAll();
    res.json(all);
  } catch (err) {
    res.status(422).send({ answer: err });
  }
};
