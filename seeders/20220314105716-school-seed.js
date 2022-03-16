'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const school = require('../data/school.json').map(el => {
      return {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert('Schools', school, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Schools', null, {});

  }
};
