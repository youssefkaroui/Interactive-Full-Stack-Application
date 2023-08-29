const { Model, DataTypes } = require('sequelize');

class CheckoutCart extends Model {}

CheckoutCart.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
}, {
  sequelize,
  modelName: 'CheckoutCart',
});

module.exports = CheckoutCart;