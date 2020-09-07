'use strict';
const Sequelize = require('sequelize/index');
const sequelize = require('../util/database');

const Perfil = sequelize.define(
  'perfil',
  {
    perfilId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nombre: Sequelize.STRING
  },
  { timestamps: false }
);

module.exports = Perfil;
