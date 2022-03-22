'use strict';
const fs = require('fs')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const data = JSON.parse(fs.readFileSync('./relations.json','utf-8'))
     data.forEach(e=>{
       e.createdAt = new Date()
       e.updatedAt = new Date()
     })
     await queryInterface.bulkInsert('Relations',data,{})
    //  await queryInterface.bulkDelete('Relations',null,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Relations',null,{})
  }
};
