'use strict';
const {
  Model
} = require('sequelize');
const { Team } = require('./');

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
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });

  Player.belongsTo(Team);

  return Player;
};