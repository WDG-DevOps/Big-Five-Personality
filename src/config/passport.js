const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../databases/models');
// 1. Impor service Anda
const { findOrCreateUser } = require('../services/authService');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // 2. Panggil service Anda
      const user = await findOrCreateUser(profile);
      // 3. Kirim user ke Passport
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

// Bagian serialize dan deserialize tetap sama
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;