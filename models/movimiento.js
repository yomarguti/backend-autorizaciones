const Sequelize = require('sequelize/index');
const sequelize = require('../util/database');

const Movimiento = sequelize.define(
  'movimiento',
  {
    movimientoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    },
    activo: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

module.exports = Movimiento;
