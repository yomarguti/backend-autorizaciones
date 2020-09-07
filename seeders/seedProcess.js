'use strict';

const process = [
  {
    procesoId: 1,
    nombre: 'Caracterizar Voladura'
  },
  {
    procesoId: 2,
    nombre: 'Crear Estructuras'
  },
  {
    procesoId: 3,
    nombre: 'Autorizar Geotecnia'
  },
  {
    procesoId: 4,
    nombre: 'Crear Malla con Guía'
  },
  {
    procesoId: 5,
    nombre: 'Validar Diseño de Perforación'
  },
  {
    procesoId: 6,
    nombre: 'Cargar Voladura a Modular'
  },
  {
    procesoId: 7,
    nombre: 'Diseñar Cargue de Precorte/Buffer'
  },
  {
    procesoId: 8,
    nombre: 'Validar Diseño de Cargue'
  },
  {
    procesoId: 9,
    nombre: 'Entregar Perfiles a Voladura'
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */
    return queryInterface.bulkInsert('procesos', process, {});
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
