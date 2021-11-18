'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WeatherForecasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datetime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iconUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      temperature: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pressure: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      humidity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      wingspeed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      LocationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id",
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      WeatherHistoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "WeatherHistories",
          key: "id",
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      WeatherTodayId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "WeatherTodays",
          key: "id",
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WeatherForecasts');
  }
};