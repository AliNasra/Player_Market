const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fan = sequelize.define('Fan', {
  fan_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Fan;