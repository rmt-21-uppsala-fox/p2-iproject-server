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
     const data = JSON.parse(fs.readFileSync('./posts.json','utf-8'))
     data.forEach(e=>{
       e.createdAt = new Date()
       e.updatedAt = new Date()
     })
     await queryInterface.bulkInsert('Posts',data,{})
    //  await queryInterface.bulkDelete('Posts',null,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Posts',null,{})
  }
};
