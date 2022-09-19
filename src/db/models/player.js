'use strict';
const {
  Model
} = require('sequelize');
const teamModel = require('./team');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    countryOfBirth: DataTypes.STRING,
    nationality: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Player',
  });

  const Team = teamModel(sequelize, DataTypes);

  Player.belongsTo(Team);

  return Player;
};