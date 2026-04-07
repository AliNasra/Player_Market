const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Team = sequelize.define('Team', {
  team_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stadium_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  contractDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  contract_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  owner_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Team;