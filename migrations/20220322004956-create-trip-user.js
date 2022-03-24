'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TripUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users",
          key:"id"
        },
        onUpdate:"cascade",
        onDelete:"cascade"
      },
      TripId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Trips",
          key:"id"
        },
        onUpdate:"cascade",
        onDelete:"cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TripUsers');
  }
};