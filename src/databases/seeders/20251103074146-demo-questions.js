'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('questions', [
      // Trait E: Extraversion (Ekstraversi) - 10 Soal
      {
        question_text: 'I am the life of the party.',
        trait: 'E',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I don\'t talk a lot.', // Perhatikan '
        trait: 'E',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I feel comfortable around people.',
        trait: 'E',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I keep in the background.',
        trait: 'E',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I start conversations.',
        trait: 'E',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I have little to say.',
        trait: 'E',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I talk to a lot of different people at parties.',
        trait: 'E',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I don\'t like to draw attention to myself.', // Perhatikan '
        trait: 'E',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I don\'t mind being the center of attention.', // Perhatikan '
        trait: 'E',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am quiet around strangers.',
        trait: 'E',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },

      // Trait N: Neuroticism (Neurotisisme / EST) - 10 Soal
      {
        question_text: 'I get stressed out easily.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am relaxed most of the time.',
        trait: 'N',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I worry about things.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I seldom feel blue.',
        trait: 'N',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am easily disturbed.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I get upset easily.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I change my mood a lot.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I have frequent mood swings.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I get irritated easily.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I often feel blue.',
        trait: 'N',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },

      // Trait A: Agreeableness (Keramahan / AGR) - 10 Soal
      {
        question_text: 'I feel little concern for others.',
        trait: 'A',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am interested in people.',
        trait: 'A',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I insult people.',
        trait: 'A',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I sympathize with others\' feelings.', // Perhatikan '
        trait: 'A',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am not interested in other people\'s problems.', // Perhatikan '
        trait: 'A',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I have a soft heart.',
        trait: 'A',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am not really interested in others.',
        trait: 'A',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I take time out for others.',
        trait: 'A',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I feel others\' emotions.', // Perhatikan '
        trait: 'A',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I make people feel at ease.',
        trait: 'A',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },

      // Trait C: Conscientiousness (Sifat Berhati-hati / CSN) - 10 Soal
      {
        question_text: 'I am always prepared.',
        trait: 'C',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I leave my belongings around.',
        trait: 'C',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I pay attention to details.',
        trait: 'C',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I make a mess of things.',
        trait: 'C',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I get chores done right away.',
        trait: 'C',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I often forget to put things back in their proper place.',
        trait: 'C',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I like order.',
        trait: 'C',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I shirk my duties.',
        trait: 'C',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I follow a schedule.',
        trait: 'C',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am exacting in my work.',
        trait: 'C',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },

      // Trait O: Openness (Keterbukaan / OPN) - 10 Soal
      {
        question_text: 'I have a rich vocabulary.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I have difficulty understanding abstract ideas.',
        trait: 'O',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I have a vivid imagination.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am not interested in abstract ideas.',
        trait: 'O',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I have excellent ideas.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I do not have a good imagination.',
        trait: 'O',
        is_reverse_scored: true, // Reverse
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am quick to understand things.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I use difficult words.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I spend time reflecting on things.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
      {
        question_text: 'I am full of ideas.',
        trait: 'O',
        is_reverse_scored: false,
        createdAt: now,
        updatedAt: now
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
