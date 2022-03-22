'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        name:"Batam",
        imgUrl:"https://anekatempatwisata.com/wp-content/uploads/2021/02/tempat-wisata-di-Lombok-1200x600.jpg",
        price:"1500000",
        description:"Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang.",
        date:"23/12/2022 - 10/01/2023"
      },
      {
        name:"Bali",
        imgUrl:"https://img.idxchannel.com/media/700/images/idx/2021/10/15/bali.jpg",
        price:"3600000",
        description:"Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang.",
        date:"24/11/2022 - 10/12/2022"
      },
      {
        name:"Surabaya",
        imgUrl:"https://ikbis.ac.id/wp-content/uploads/2021/03/Anda-di-Surabaya-Inilah-Pentingnya-Menggunakan-Konsultan-Pajak-Surabaya.jpg",
        price:"2750000",
        description:"Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang.",
        date:"15/07/2022 - 25/07/2022"
      },
      {
        name:"Yogjakarta",
        imgUrl:"https://akcdn.detik.net.id/visual/2020/09/01/kemenparekraf-iklan_169.png?w=650",
        price:"800000",
        description:"Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang.",
        date:"14/06/2022 - 30/06/2022"
      },
      {
        name:"Raja Ampat",
        imgUrl:"https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/destinations-thumbnail/Raja-Ampat-Thumbnail.png",
        price:"7500000",
        description:"Kota Batam adalah sebuah kota terbesar di Provinsi Kepulauan Riau, Indonesia. Wilayah Kota Batam terdiri dari Pulau Batam, Pulau Rempang dan Pulau Galang dan pulau-pulau kecil lainnya di kawasan Selat Singapura dan Selat Malaka. Pulau Batam, Rempang, dan Galang terkoneksi oleh Jembatan Barelang.",
        date:"30/03/2022 - 10/04/2022"
      }
    ]
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
     await queryInterface.bulkInsert('Trips', data);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Trips', null, {});
  }
};
