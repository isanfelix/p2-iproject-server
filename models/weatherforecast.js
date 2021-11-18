'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeatherForecast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WeatherForecast.hasMany(models.Location)
    }
  };
  WeatherForecast.init({
    datetime: DataTypes.INTEGER,
    status: DataTypes.STRING,
    iconUrl: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    pressure: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER,
    wingspeed: DataTypes.INTEGER,
    LocationId: DataTypes.INTEGER,
    WeatherHistoryId: DataTypes.INTEGER,
    WeatherTodayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WeatherForecast',
  });
  return WeatherForecast;
};