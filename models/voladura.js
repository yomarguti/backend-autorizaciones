const Sequelize = require('sequelize/index');
const sequelize = require('../util/database');

const Voladura = sequelize.define(
  'voladura',
  {
    voladuraId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /[PWAXFCNSMOE]\d{3}[QABDEFGH]?/g
      }
    },
    anio: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nivel: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tipoCota: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gridPiso: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tienePrecorte: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    panel: {
      type: Sequelize.STRING,
      allowNull: true
    },
    pala: {
      type: Sequelize.STRING,
      allowNull: true
    },
    manto: {
      type: Sequelize.STRING,
      allowNull: true
    },
    patron: {
      type: Sequelize.STRING,
      allowNull: true
    },
    alturaBanco: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    comentario: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
);

module.exports = Voladura;
