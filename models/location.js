'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.belongsTo(models.WeatherToday, {foreignKey: "WeatherTodayId"})
      Location.belongsTo(models.WeatherHistory, {foreignKey: "WeatherHistoryId"})
      Location.belongsTo(models.WeatherForecast, {foreignKey: "WeatherForecastId"})
    }
  };
  Location.init({
    code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    long: DataTypes.INTEGER,
    lat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};