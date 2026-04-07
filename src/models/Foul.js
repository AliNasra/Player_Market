const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Foul = sequelize.define('Foul', {
  foul_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fouler_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fouled_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  match_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Foul;