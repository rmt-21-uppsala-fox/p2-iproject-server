'use strict';
const fs = require ('fs');
let data =  JSON.parse(fs.readFileSync('./data/genres.json'))
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return await queryInterface.bulkInsert("Genres", data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Genres", null)
  }
};
