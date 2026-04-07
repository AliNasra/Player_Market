const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Owner = sequelize.define('Owner', {
  owner_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wealth: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Owner;