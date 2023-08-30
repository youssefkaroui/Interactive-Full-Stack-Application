const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); // Your Sequelize instance

class Book extends Model {}

Book.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    codelanguage: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    numberofcheckouts: {
      type:DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
)

// Define a method to increment checkouts when a book is checked out
Book.prototype.checkout = function () {
  this.numberofcheckouts++;
  return this.save(); // Save the updated count to the database
};


module.exports = Book;