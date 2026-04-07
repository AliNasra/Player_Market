const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('player_market', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;