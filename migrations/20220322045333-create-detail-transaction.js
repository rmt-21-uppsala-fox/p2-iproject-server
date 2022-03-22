"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DetailTransactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TransactionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Transactions",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      ProductId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
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
    await queryInterface.dropTable("DetailTransactions");
  },
};
