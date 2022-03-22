"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GamesTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      GameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Games",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      TagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tags",
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
    await queryInterface.dropTable("GamesTags");
  },
};
