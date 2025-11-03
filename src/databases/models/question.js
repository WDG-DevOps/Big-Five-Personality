'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.hasMany(models.UserAnswer, {
        foreignKey: 'question_id',
        as: 'userAnswers'
      });
    }
  }
  Question.init({
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    trait: {
      type: DataTypes.ENUM('O', 'C', 'E', 'A', 'N'), // <-- Pastikan ini juga ENUM
      allowNull: false
    },
    is_reverse_scored: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
  });
  return Question;
};