'use strict';
const Sequelize = require('sequelize/index');
const sequelize = require('../util/database');

const Usuario = sequelize.define(
  'usuario',
  {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nombre: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

module.exports = Usuario;
