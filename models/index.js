const Book = require("./Book");
const User = require("./User"); 
const Documentation = require("./Documentation"); 
const CheckoutCart = require("./CheckoutCart");

User.hasMany(Book, {
    foreignKey: "user_id",
    onDelete:"CASCADE"
});


//book belongs to user (foreign key)
Book.belongsTo(User, {
    foreignKey:'user_id',
    });
   

User.hasOne(CheckoutCart, {
    foreignKey:'user_id',
});

module.exports = {Book, User, Documentation, CheckoutCart } ;