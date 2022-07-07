module.exports = (sequelize, Sequelize) => {
  const expenses = sequelize.define(
    "expenses",
    {
      shop: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
    },
    { timestamps: false }
  );
  return expenses;
};
