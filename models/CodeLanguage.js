const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Your Sequelize instance

class CodeLanguage extends Model {}

CodeLanguage.init({
   language_id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
},
name:{
    type:DataTypes.STRING,
    allowNull:false,
},
version:{
    type:DataTypes.STRING,
    allowNull:false,
},
},{
    sequelize,
    modelName: 'codelanguage',
  });

module.exports = CodeLanguage;