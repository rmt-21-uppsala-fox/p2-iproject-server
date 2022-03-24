'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        name:"Batam",
        imgUrl:"https://anekatempatwisata.com/wp-content/uploads/2021/02/tempat-wisata-di-Lombok-1200x600.jpg",
        price:"1500000",
        description:"Batam merupakan salah satu kota dengan letak yang sangat strategis. Selain berada di jalur pelayaran internasional, kota ini memiliki jarak yang sangat dekat dan berbatasan langsung dengan Singapura dan Malaysia. Sebagai kota terencana, Batam merupakan salah satu kota dengan pertumbuhan terpesat di Indonesia. Ketika dibangun pada tahun 1970-an oleh Otorita Batam (saat ini bernama BP Batam), kota ini hanya dihuni sekitar 6.000 penduduk dan dalam tempo 40 tahun penduduk Batam bertumbuh hingga 158 kali lipat.",
        date:"23/12/2022 - 10/01/2023"
      },
      {
        name:"Bali",
        imgUrl:"https://img.idxchannel.com/media/700/images/idx/2021/10/15/bali.jpg",
        price:"3600000",
        description:"sebuah provinsi di Indonesia yang ibu kotanya bernama Denpasar. Bali juga merupakan salah satu pulau di Kepulauan Nusa Tenggara. Di awal kemerdekaan Indonesia, pulau ini termasuk dalam Provinsi Sunda Kecil yang beribu kota di Singaraja, dan kini terbagi menjadi 3 provinsi, yakni Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur.[9][10] Pada tahun 2020, penduduk provinsi Bali berjumlah 4.317.404 jiwa, dengan kepadatan 747 jiwa/km2.",
        date:"24/11/2022 - 10/12/2022"
      },
      {
        name:"Surabaya",
        imgUrl:"https://ikbis.ac.id/wp-content/uploads/2021/03/Anda-di-Surabaya-Inilah-Pentingnya-Menggunakan-Konsultan-Pajak-Surabaya.jpg",
        price:"2750000",
        description:"Surabaya terkenal dengan sebutan Kota Pahlawan karena sejarahnya yang sangat diperhitungkan dalam perjuangan Arek-Arek Suroboyo (Pemuda-pemuda Surabaya) dalam mempertahankan kemerdekaan bangsa Indonesia dari serangan penjajah. Surabaya juga sempat menjadi kota terbesar di Hindia Belanda dan menjadi pusat niaga di Nusantara yang sejajar dengan Hong Kong dan Shanghai pada masanya.[7] Menurut Bappenas, Surabaya adalah salah satu dari empat pusat pertumbuhan utama di Indonesia, bersama dengan Medan, Jakarta, dan Makassar.",
        date:"15/07/2022 - 25/07/2022"
      },
      {
        name:"Yogjakarta",
        imgUrl:"https://akcdn.detik.net.id/visual/2020/09/01/kemenparekraf-iklan_169.png?w=650",
        price:"800000",
        description:"Penyebutan nomenklatur Daerah Istimewa Yogyakarta yang terlalu panjang menimbulkan penyingkatan nomenklatur menjadi DI Yogyakarta atau DIY. Daerah Istimewa Yogyakarta sering dihubungkan dengan Kota Yogyakarta sehingga secara kurang tepat sering disebut dengan Jogja, Yogya, Yogyakarta, Jogjakarta. Walau secara geografis merupakan daerah setingkat provinsi terkecil kedua setelah DKI Jakarta, Daerah Istimewa ini terkenal di tingkat nasional, dan internasional, terutama sebagai tempat tujuan wisata andalan setelah Provinsi Bali.",
        date:"14/06/2022 - 30/06/2022"
      },
      {
        name:"Raja Ampat",
        imgUrl:"https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/destinations-thumbnail/Raja-Ampat-Thumbnail.png",
        price:"7500000",
        description:"Kepulauan Raja Ampat berada di bagian paling barat Papua dan membentang di area seluas kurang lebih 4,6 juta hektar. Kabupaten Raja Ampat terdiri dari 4 pulau besar yaitu Pulau Waigeo, Batanta, Salawati dan Misool, dan 1.847 pulau-pulau kecil lainnya. Nah, nama Raja Ampat sendiri diyakini berasal dari legenda masyarakat setempat yang percaya bahwa zaman dahulu kala ada seorang wanita yang menemukan tujuh telur, empat telur tersebut menetas menjadi raja-raja yang berkuasa di empat pulau utama.",
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
