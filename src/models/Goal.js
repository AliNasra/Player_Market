const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Goal = sequelize.define('Goal', {
  goal_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  scorer_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  assister_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
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

module.exports = Goal;