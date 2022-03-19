'use strict';
const fs = require ('fs');
let data =  JSON.parse(fs.readFileSync('./data/movies.json'))
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return await queryInterface.bulkInsert("UserMovies", data)
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("UserMovies", null)
  }
};
