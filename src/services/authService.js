const { User } = require('../databases/models'); 

/**
 * Mencari pengguna di database berdasarkan Google ID.
 * Jika tidak ditemukan, buat pengguna baru.
 * * @param {object} googleProfile - Objek 'profile' yang diterima dari Passport
 * @returns {Promise<User>} Instance user yang ditemukan atau baru dibuat
 */
const findOrCreateUser = async (googleProfile) => {
  try {
    // findOrCreate adalah metode Sequelize yang sangat efisien untuk ini.
    // Dia akan mencari user dengan 'where', dan jika tidak ada,
    // dia akan membuat user baru menggunakan 'defaults'.
    const [user, created] = await User.findOrCreate({
      where: { google_id: googleProfile.id },
      defaults: {
        google_id: googleProfile.id,
        name: googleProfile.displayName,
        email: googleProfile.emails[0].value,
      }
    });

    if (created) {
      console.log(`[AuthService] Pengguna baru dibuat: ${user.name}`);
    } else {
      console.log(`[AuthService] Pengguna lama ditemukan: ${user.name}`);
    }

    return user; // Kembalikan data user (baik lama maupun baru)

  } catch (error) {
    console.error('[AuthService] Error saat findOrCreateUser:', error);
    // Melempar error agar bisa ditangkap oleh Passport
    throw error;
  }
};

module.exports = {
  findOrCreateUser,
};