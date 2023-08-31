const User = require("./User"); 
const Documentation = require("./Documentation"); 
const CheckoutCart = require("./CheckoutCart");

User.hasMany(Documentation, {
    foreignKey: "user_id",
    onDelete:"CASCADE"
});


//book belongs to user (foreign key)
Documentation.belongsTo(User, {
    foreignKey:'user_id',
    });
   

User.hasOne(CheckoutCart, {
    foreignKey:'user_id',
});

module.exports = {User, Documentation, CheckoutCart } ;