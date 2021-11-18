const router = require('express').Router()
const WeatherController = require('../controllers/weatherController')
const OpenWeatherByIp = require('../middlewares/openWeather')

router.post('/', OpenWeatherByIp, WeatherController.getWeather)


module.exports = router