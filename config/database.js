// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smart_home_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = { sequelize };
