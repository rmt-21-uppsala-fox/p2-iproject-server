"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      imgUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      WorkshopId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Workshops",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      CategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
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
    await queryInterface.dropTable("Products");
  },
};
