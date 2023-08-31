const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CheckoutCart extends Model {}

CheckoutCart.init({
  cartID: {
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