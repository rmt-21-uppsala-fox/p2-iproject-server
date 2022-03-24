"use strict";
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = fs.readFileSync("./data/destination.json", "utf-8");
    data = JSON.parse(data);

    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Destination", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Destination", null, {});
    s;
  },
};
