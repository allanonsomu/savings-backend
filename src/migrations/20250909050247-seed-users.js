'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('demo@nissmart', 10);

    await queryInterface.bulkInsert('Users', [
      {
        id: Sequelize.literal('UUID()'),
        firstName: 'Demo',
        middleName: null,
        lastName: 'User',
        emailAddress: 'demo@nissmart.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {
      emailAddress: ['demo@nissmart.com']
    }, {});
  },
};
