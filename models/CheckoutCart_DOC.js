const { Model, DataTypes } = require('sequelize');

class CheckoutCart_DOC extends Model {}

CheckoutCart_DOC.init({
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'CheckoutCart',
      key: 'id',
    },
  },
  DocID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Documentation',
      key: 'DocID',
    },
  },
}, {
  sequelize,
  modelName: 'CheckoutCart_DOC',
});

module.exports = CheckoutCart_DOC;