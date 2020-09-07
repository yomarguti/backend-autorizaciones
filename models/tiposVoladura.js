const Sequelize = require('sequelize/index');
const sequelize = require('../util/database');

const TiposVoladura = sequelize.define(
  'tiposVoladura',
  {
    tipoVoladuraId: {
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

module.exports = TiposVoladura;
