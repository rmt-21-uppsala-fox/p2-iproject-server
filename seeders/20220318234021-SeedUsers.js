'use strict';
const fs = require ('fs');
const { hashPassword } = require('../helpers/bcrypt');
let data = JSON.parse(fs.readFileSync('./data/users.json'))
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      const hash = hashPassword(el.password)
      
      el.password = hash
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return await queryInterface.bulkInsert("Users", data)
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Users", null)
  }
};
