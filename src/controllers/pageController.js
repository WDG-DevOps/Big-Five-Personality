const { getAllQuestions, saveTestResult } = require('../services/pageService');

exports.homePage = (req, res) => {
  const home = 'home.ejs';
  res.render('layouts.ejs', { body: home });
}

exports.testPage = async (req, res) => {
  const questions = await getAllQuestions();
  const test = 'test.ejs';
  res.render('layouts.ejs', { body: test, questions });
}

exports.resultPage = (req, res) => {
  const result = 'hasil.ejs';
  res.render('layouts.ejs', { body: result });
}

exports.testsubmitPage = async (req, res) => {
  const result = await saveTestResult( req.user.id, req.body.answers );
  res.json({ message: 'Data received', result });
}