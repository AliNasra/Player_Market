const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const League = sequelize.define('League', {
  league_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = League;