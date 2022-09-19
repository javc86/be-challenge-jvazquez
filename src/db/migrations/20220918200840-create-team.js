'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      tla: {
        type: Sequelize.STRING
      },
      shortName: {
        type: Sequelize.STRING
      },
      areaName: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      competitionId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Competitions',
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teams');
  }
};