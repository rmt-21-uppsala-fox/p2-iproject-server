'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    const data = require('../db/menus.json')
    data.forEach(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
    });

    await queryInterface.bulkInsert('Menus', data, {});
 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Menus', null, {});

  }
};
