'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('questions', [
      // Trait E (Extraversion)
      { question_text: 'Saya adalah pusat perhatian di pesta.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak banyak bicara.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya merasa nyaman di sekitar orang.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya lebih suka berada di latar belakang.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya memulai percakapan.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak banyak yang ingin dikatakan.', trait: 'E', createdAt: new Date(), updatedAt: new Date() }, // Berasal dari "I have little to say"
      { question_text: 'Saya berbicara dengan banyak orang berbeda di pesta.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak suka menarik perhatian.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak keberatan menjadi pusat perhatian.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya pendiam di sekitar orang asing.', trait: 'E', createdAt: new Date(), updatedAt: new Date() },

      // Trait N (Neuroticism)
      { question_text: 'Saya mudah stres.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya seringkali merasa santai.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya mengkhawatirkan banyak hal.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya jarang merasa sedih.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya mudah terganggu.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya mudah kesal.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Suasana hati saya sering berubah.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya sering mengalami perubahan suasana hati.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya mudah tersinggung.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya sering merasa sedih.', trait: 'N', createdAt: new Date(), updatedAt: new Date() },

      // Trait A (Agreeableness)
      { question_text: 'Saya kurang peduli dengan orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tertarik pada orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya menghina orang.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya bersimpati dengan perasaan orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak tertarik dengan masalah orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya memiliki hati yang lembut.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak terlalu tertarik pada orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya meluangkan waktu untuk orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya merasakan emosi orang lain.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya membuat orang lain merasa nyaman.', trait: 'A', createdAt: new Date(), updatedAt: new Date() },

      // Trait C (Conscientiousness)
      { question_text: 'Saya selalu siap.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya menaruh barang-barang saya sembarangan.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya memperhatikan detail.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya membuat segalanya berantakan.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya segera menyelesaikan tugas.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya sering lupa mengembalikan barang ke tempatnya.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya menyukai ketertiban.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya melalaikan tugas saya.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya mengikuti jadwal.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya teliti dalam pekerjaan saya.', trait: 'C', createdAt: new Date(), updatedAt: new Date() },

      // Trait O (Openness)
      { question_text: 'Saya memiliki kosakata yang kaya.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya kesulitan memahami ide-ide abstrak.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya memiliki imajinasi yang jelas.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak tertarik pada ide-ide abstrak.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya punya ide-ide cemerlang.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya tidak memiliki imajinasi yang baik.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya cepat memahami sesuatu.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya menggunakan kata-kata sulit.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya menghabiskan waktu untuk merenung.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
      { question_text: 'Saya penuh dengan ide.', trait: 'O', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
