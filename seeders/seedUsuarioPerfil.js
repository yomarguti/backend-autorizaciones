'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UsuarioPerfil',
      [
        {
          usuarioId: 1,
          perfilId: 1
        },
        {
          usuarioId: 2,
          perfilId: 2
        },
        {
          usuarioId: 1,
          perfilId: 3
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
