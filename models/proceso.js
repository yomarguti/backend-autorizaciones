const Sequelize = require('sequelize/index');
const sequelize = require('../util/database');

const Proceso = sequelize.define(
  'proceso',
  {
    procesoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false
  }
);

module.exports = Proceso;
