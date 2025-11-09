// buatkan logika untuk mengambil pertanyaan dari database
const { Question, TestResult, UserAnswer } = require('../databases/models');

exports.getAllQuestions = async () => {
    try {
        const questions = await Question.findAll();
        return questions;
    } catch (error) {
        console.error('[QuestionService] Error mengambil semua pertanyaan:', error);
        throw error;
    }
};

exports.saveTestResult = async (userId, answers, probabilities) => {
    const t = await Question.sequelize.transaction();
    try {
        // Simpan hasil tes
        const newTestResult = await TestResult.create({
            user_id: userId,
        });

        const resultId = newTestResult.id;

        const answersToSave = answers.map(answer => ({
            question_id: answer.question_id,
            answer_score: answer.score, // 'answer_score' adalah nama kolom di DB
            result_id: resultId          // Tambahkan 'result_id' ke setiap jawaban
        }));
        await UserAnswer.bulkCreate(answersToSave);
        
        // Simpan probabilitas
        await newTestResult.update({
            score_O: probabilities.OPN,
            score_C: probabilities.CSN,
            score_E: probabilities.EST,
            score_A: probabilities.AGR,
            score_N: probabilities.EXT
        });

        await t.commit();
        return resultId;
    } catch (error) {
        console.error('Error saat submit tes:', error);
        await t.rollback();
        throw new Error('Terjadi kesalahan pada server.');
    }
};