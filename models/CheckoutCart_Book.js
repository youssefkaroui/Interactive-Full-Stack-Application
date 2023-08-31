const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CheckoutCart_Book extends Model {}

CheckoutCart_Book.init({
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'CheckoutCart',
      key: 'id',
    },
  },
  BookId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Book',
      key: 'isbn',
    },
  },
}, {
  sequelize,
  modelName: 'CheckoutCart_Book',
});

module.exports = CheckoutCart_Book;