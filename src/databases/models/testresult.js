'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TestResult.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user' // Alias opsional untuk mempermudah query
      });
    }
  }
  TestResult.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    score_O: {
      type: DataTypes.TINYINT, // <-- Diubah ke TINYINT
      allowNull: false,
      defaultValue: 0
    },
    score_C: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    score_E: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    score_A: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    score_N: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'TestResult',
    tableName: 'test_results',
  });
  return TestResult;
};