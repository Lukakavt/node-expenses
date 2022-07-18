module.exports = (sequelize, Sequelize) => {
  const expenses = sequelize.define("expenses", {
    shop: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    date: {
      type: Sequelize.DATE,
    },
  });
  return expenses;
};
