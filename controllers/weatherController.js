const { Location, WeatherToday, WeatherHistory, WeatherForecast } = require('../models/index')
const Op = require('Sequelize').Op

class WeatherController {

  static async getWeather (req, res, next) {
    try {
      const newData = {
        weather: req.body.weather[0].main,
        description: req.body.weather[0].description,
        icon: req.body.weather[0].icon,
        temp: req.body.parameter.temp,
        time: req.body.datetime,
      }

      res.status(200).json(newData)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = WeatherController