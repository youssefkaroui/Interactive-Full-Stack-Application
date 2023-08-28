const {Model, DataTypes}=require('sequelize') ;
const sequelize=require('../config/connection');
class Book extends Model {}

Book.init(

  {
    isbn:{
      type:DataTypes.INTEGER,
      allowNull:false , primaryKey : true
      
    },
    title:{
      type:DataTypes.STRING,  allowNull: false

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


module.exports = Book