'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserAnswer.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'question'
      });
    }
  }
  UserAnswer.init({
    result_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    answer_score: {
      type: DataTypes.TINYINT, // <-- Diubah ke TINYINT
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserAnswer',
    tableName: 'user_answers',
  });
  return UserAnswer;
};