require('dotenv').config();
const express = require('express');
const session = require('express-session'); // 1. Perlu 'express-session'
const passport = require('./config/passport'); // 2. Import file passport.js Anda
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 3. Konfigurasi Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    maxAge: 24 * 60 * 60 * 1000,
    secure: false
  } // 1 hari
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { sequelize } = require('./databases/models');
sequelize.authenticate()
  .then(() => console.log('✅ Database connected...'))
  .catch(err => console.error('⚠️ Database connection error:', err));


app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.user = req.user;
  next();
});

app.use('/', require('./routes'));

module.exports = app;