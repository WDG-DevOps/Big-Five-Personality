'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      result_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // 2. Foreign Key ke 'test_results'
        references: {
          model: 'test_results', // Nama tabel hasil tes
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Jika hasil tes dihapus, jawabannya ikut terhapus
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // 3. Foreign Key ke 'Questions'
        references: {
          model: 'Questions', // Nama tabel pertanyaan
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Jika pertanyaan dihapus, jawaban ini ikut terhapus
      },
      answer_score: {
        type: Sequelize.TINYINT, // <-- 4. Diubah ke TINYINT
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_answers');
  }
};