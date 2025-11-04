exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // Pengguna sudah login, lanjutkan
  }
  // Pengguna belum login, redirect ke halaman login
  res.redirect('/login');
};