const { Model, DataTypes } = require('sequelize');

class Documentation extends Model {}

Documentation.init({
  DocID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codelanguage_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CodeLanguage',
      key: 'id',
    },
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