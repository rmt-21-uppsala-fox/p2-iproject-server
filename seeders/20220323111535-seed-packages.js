'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    let productPackages = [
      {
        name: 'Men Hygiene',
        description: 'A basket full of Men Stuff',
        imgUrl: 'https://m.media-amazon.com/images/I/8111LXtDh3L._AC_SY606_.jpg',
        price: 235000
      }, {
        name: 'Women Hygiene',
        description: 'Ladies essentials',
        imgUrl: 'https://media.sciencephoto.com/c0/25/91/87/c0259187-800px-wm.jpg',
        price: 350000
      }, {
        name: 'Essential House Cleaning',
        description: 'All you need to keep your home clean',
        imgUrl: 'https://i.pinimg.com/originals/88/f9/3d/88f93de6201df8c7737224eadbce798d.jpg',
        price: 165000
      }, {
        name: 'Dairy Satiation',
        description: 'This will satisfy all your dairy needs',
        imgUrl: 'https://image.shutterstock.com/image-photo/wicker-basket-dairy-product-260nw-135489893.jpg',
        price: 550000
      }, {
        name: 'Premium Fruit Basket',
        description: 'An apple a day keeps the doctor away',
        imgUrl: 'https://fyf.tac-cdn.net/images/products/large/FYF-870.jpg',
        price: 200000
      },
    ]

    productPackages.forEach((productPackage) => {
      productPackage.createdAt = new Date()
      productPackage.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Packages', productPackages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Packages', null, {});

  }
};