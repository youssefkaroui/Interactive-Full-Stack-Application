const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Your Sequelize instance

const LinkClick = sequelize.define('LinkClick', {
  linkName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clickCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = LinkClick;