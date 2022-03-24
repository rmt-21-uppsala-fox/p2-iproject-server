"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const walletCards = [
      {
        name: "Steam Wallet 12000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 45000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 45000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 60000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 60000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 90000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 90000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 120000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 120000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 250000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 250000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 400000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 400000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steam Wallet 600000",
        imageUrl:
          "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
        price: 600000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("WalletCards", walletCards, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("WalletCards", null, {});
  },
};
