const passport = require('passport');

exports.loginPage = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('login.ejs');
}

exports.googleLogin = passport.authenticate('google', {
  // 'scope' memberi tahu Google data apa yang kita minta
  scope: ['profile', 'email'] 
});

exports.googleCallback = passport.authenticate('google', {
  // Ke mana harus diarahkan jika login SUKSES

  successRedirect: '/', 
  
  // Ke mana harus diarahkan jika login GAGAL
  failureRedirect: '/login'  
});

exports.logout = (req, res, next) => {
  // 'req.logout()' adalah fungsi yang disediakan oleh Passport
  req.logout((err) => {
    if (err) { 
      return next(err); 
    }
    
    // Hancurkan session
    req.session.destroy(() => {
      res.clearCookie('connect.sid'); // Hapus cookie session
      res.redirect('/'); // Arahkan kembali ke Halaman Home
    });
  });
};