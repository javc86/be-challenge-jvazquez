'use strict';
const {
  Model
} = require('sequelize');
const competitionModel = require('./competition');

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
    website: DataTypes.STRING,
    competitionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Team',
  });

  const Competitions = competitionModel(sequelize, DataTypes);

  Team.belongsTo(Competitions);

  return Team;
};