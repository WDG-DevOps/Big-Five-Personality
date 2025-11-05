const { Question } = require('../databases/models');

// Fungsi helper untuk membalik skor (skala 1-5)
function reverseScore(score) {
  // Rumus: (Skala Maks + 1) - Skor
  return (5 + 1) - score; 
}

/**
 * Menghitung skor Big Five (O,C,E,A,N) dari array jawaban mentah.
 * @param {Array} answers - Array dari klien, cth: [{ question_id: 1, score: 5 }, ...]
 * @returns {Object} Object berisi total skor, cth: { O: 45, C: 38, ... }
 */
async function calculateScores(answers) {
  // 1. Ambil semua ID pertanyaan dari jawaban
  const questionIds = answers.map(a => a.question_id);

  // 2. Ambil semua data (terutama 'trait' & 'is_reverse_scored')
  //    dari database untuk pertanyaan-pertanyaan tersebut
  const questions = await Question.findAll({
    where: { id: questionIds },
    attributes: ['id', 'trait', 'is_reverse_scored']
  });

  // 3. Buat "Peta" (Map) agar data pertanyaan mudah dicari
  const questionMap = new Map();
  questions.forEach(q => {
    questionMap.set(q.id, {
      trait: q.trait, // 'O', 'C', 'E', 'A', 'N'
      isReverse: q.is_reverse_scored // true/false
    });
  });

  // 4. Inisialisasi object untuk menampung total skor
  const scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };

  // 5. Loop semua jawaban, hitung, dan jumlahkan
  for (const answer of answers) {
    const questionData = questionMap.get(answer.question_id);

    // Jika data pertanyaan tidak ditemukan, lewati
    if (!questionData) continue; 

    let finalScore = answer.score;

    // Cek jika skor perlu dibalik
    if (questionData.isReverse) {
      finalScore = reverseScore(finalScore);
    }

    // Tambahkan skor ke 'trait' yang benar
    // 'questionData.trait' akan berisi 'O', 'C', 'E', 'A', atau 'N'
    const trait = questionData.trait;
    if (scores.hasOwnProperty(trait)) {
      scores[trait] += finalScore;
    }
  }

  // 6. Kembalikan object skor yang sudah dihitung
  return scores;
}

module.exports = {
  calculateScores
};