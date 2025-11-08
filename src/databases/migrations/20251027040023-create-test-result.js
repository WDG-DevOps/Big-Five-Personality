'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('test_results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // 2. Menambahkan Foreign Key
        references: {
          model: 'users', // Nama tabel 'users' Anda
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Jika user dihapus, hasil tesnya ikut terhapus
      },
      score_O: {
        type: Sequelize.TINYINT, // <-- 3. Diubah ke TINYINT
        allowNull: false,
        defaultValue: 0
      },
      score_C: {
        type: Sequelize.TINYINT, // <-- 3. Diubah ke TINYINT
        allowNull: false,
        defaultValue: 0
      },
      score_E: {
        type: Sequelize.TINYINT, // <-- 3. Diubah ke TINYINT
        allowNull: false,
        defaultValue: 0
      },
      score_A: {
        type: Sequelize.TINYINT, // <-- 3. Diubah ke TINYINT
        allowNull: false,
        defaultValue: 0
      },
      score_N: {
        type: Sequelize.TINYINT, // <-- 3. Diubah ke TINYINT
        allowNull: false,
        defaultValue: 0
      },
      completed_at: {
        type: Sequelize.DATE, // <-- 4. DATE di Sequelize maps ke TIMESTAMP
        allowNull: false,
        defaultValue: Sequelize.fn('NOW') // Otomatis diisi waktu server saat dibuat
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
    await queryInterface.dropTable('test_results');
  }
};