const axios = require('axios');
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
  const probabilities = req.session.probabilities;
  delete req.session.probabilities; 
  console.log('Probabilities received in resultPage:', probabilities);
  const result = 'hasil.ejs';
  res.render('layouts.ejs', { body: result, probabilities: probabilities });
}

exports.testsubmitPage = async (req, res) => {
  const QUESTION_LABELS = [
    'EXT1', 'EXT2', 'EXT3', 'EXT4', 'EXT5', 'EXT6', 'EXT7', 'EXT8', 'EXT9', 'EXT10',
    'EST1', 'EST2', 'EST3', 'EST4', 'EST5', 'EST6', 'EST7', 'EST8', 'EST9', 'EST10',
    'AGR1', 'AGR2', 'AGR3', 'AGR4', 'AGR5', 'AGR6', 'AGR7', 'AGR8', 'AGR9', 'AGR10',
    'CSN1', 'CSN2', 'CSN3', 'CSN4', 'CSN5', 'CSN6', 'CSN7', 'CSN8', 'CSN9', 'CSN10',
    'OPN1', 'OPN2', 'OPN3', 'OPN4', 'OPN5', 'OPN6', 'OPN7', 'OPN8', 'OPN9', 'OPN10'
  ];
  const bigFiveFormat = {};
  for (const answer of req.body.answers) {
    const id = answer.question_id;
    const score = answer.score;
    const label = QUESTION_LABELS[id - 1];
    if (label) {
      bigFiveFormat[label] = score;
    } else {
      console.warn(`Question ID ${id} is out of expected range or missing label.`);
    }
  }
  
  const predictionResponse = await axios.post(`http://prediction-service:5000/predict`, bigFiveFormat);
  predictionResult = predictionResponse.data;
  req.session.probabilities = predictionResult.probabilities;
  const result = await saveTestResult( req.user.id, req.body.answers, predictionResult.probabilities );
  res.json({ message: 'Data received', result: predictionResult });
}