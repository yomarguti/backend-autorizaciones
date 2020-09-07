'use strict';

const tiposDeVoladura = [
  { tipoVoladuraId: 1, nombre: 'Optimización 60°' },
  { tipoVoladuraId: 2, nombre: 'Optimización 70° Primer Nivel' },
  { tipoVoladuraId: 3, nombre: 'Optimización 70° Segundo Nivel' },
  { tipoVoladuraId: 4, nombre: 'Optimización 70° Tercer Nivel' },
  { tipoVoladuraId: 5, nombre: 'Optimización 70° Cuarto Nivel' },
  { tipoVoladuraId: 6, nombre: 'Contorno Footwall' }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tiposVoladuras', tiposDeVoladura, {});
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
