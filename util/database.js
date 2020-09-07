const Sequelize = require('sequelize/index');

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST } = process.env;

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'mysql',
  logging: false,
  timezone: '-05:00'
});

module.exports = sequelize;
