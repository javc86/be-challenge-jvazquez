'use strict';
const {
  Model
} = require('sequelize');
const { Competition, Player } = require('./');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    name: DataTypes.STRING,
    tla: DataTypes.STRING,
    shortName: DataTypes.STRING,
    areaName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });

  Team.belongsTo(Competitions);
  Team.hasMany(Player);

  return Team;
};