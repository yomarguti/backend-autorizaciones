'use strict';

const movimientos = [
  8,
  7,
  4,
  8,
  4,
  7,
  5,
  1,
  2,
  1,
  2,
  9,
  9,
  3,
  8,
  3,
  3,
  1,
  9,
  3,
  7,
  3,
  6,
  3,
  2,
  8,
  8,
  9,
  5,
  9,
  8,
  2,
  8,
  4,
  1,
  4,
  6,
  3,
  7,
  9,
  6,
  7,
  7,
  8,
  6,
  9,
  5,
  6,
  5,
  6
];

const movEdited = movimientos.map((mov, index) => {
  return {
    procesoId: mov,
    fecha: new Date(),
    activo: true,
    voladuraId: index + 1
  };
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movimientos', movEdited, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
