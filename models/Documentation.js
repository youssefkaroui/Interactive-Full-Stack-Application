const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Documentation extends Model {}

Documentation.init({
  DocID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  docTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false,
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
  modelName: 'Documentation',
});

module.exports = Documentation;