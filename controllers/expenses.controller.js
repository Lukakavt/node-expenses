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
exports.add = (req, res) => {
  if (!req.body["shop"]) {
    res.status(422);
    res.send({ answer: "Text is required" });
  }
  expenses
    .create(req.body)
    .then(async (data) => {
      res.send(await expenses.findAll());
    })
    .catch((err) => {
      res.status(422).send({ answer: err });
    });
};
