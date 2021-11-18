'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeatherHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WeatherHistory.hasMany(models.Location)
    }
  };
  WeatherHistory.init({
    datetime: DataTypes.INTEGER,
    status: DataTypes.STRING,
    iconUrl: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    pressure: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER,
    wingspeed: DataTypes.INTEGER,
    LocationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WeatherHistory',
  });
  return WeatherHistory;
};