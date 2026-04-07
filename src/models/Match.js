const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Match = sequelize.define('Match', {
  match_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  referee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team1_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  team2_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Match;