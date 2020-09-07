'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ProcesosPerfil',
      [
        {
          perfilId: 3,
          procesoId: 1
        },
        {
          perfilId: 3,
          procesoId: 2
        },
        {
          perfilId: 2,
          procesoId: 3
        },
        {
          perfilId: 1,
          procesoId: 4
        },
        {
          perfilId: 3,
          procesoId: 5
        },
        {
          perfilId: 1,
          procesoId: 6
        },
        {
          perfilId: 1,
          procesoId: 7
        },
        {
          perfilId: 3,
          procesoId: 8
        },
        {
          perfilId: 1,
          procesoId: 9
        }
      ],
      {}
    );
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
