"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Donations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      target: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      collectedFunds: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bankAccount: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      story: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      region: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      AdminId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Admins",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Donations");
  },
};
