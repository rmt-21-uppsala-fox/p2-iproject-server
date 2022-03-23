'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const images = [{
        imageUrl: 'https://i.ibb.co/18L8r1C/9f3810a28d12.jpg',
        UserId: 1
      },
      {
        imageUrl: 'https://i.ibb.co/8sQfCK9/2746df045159.jpg',
        UserId: 1
      },{
        imageUrl: 'https://i.ibb.co/8PJ5pkX/e1abd1ebba46.jpg',
        UserId: 2
      },
      {
        imageUrl: 'https://i.ibb.co/WyX3ZkN/ee624f88049d.jpg',
        UserId: 2
      },
    ]

    images.forEach((image) => {
      image.createdAt = new Date()
      image.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Images', images, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});

  }
};