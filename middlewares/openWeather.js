const axios = require('axios')

const OpenWeatherByIp = async (req, res, next) => {
  try {
    const { city, lat, lon } = req.body

    const InstanceWeatherAPI = axios.create({
      baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6491a471373789824fb66e9e90fb0d98&units=metric`
    })

    const response = await InstanceWeatherAPI({
      methode: "POST",
    })

    req.body = {
      weather: response.data.weather,
      parameter: response.data.main,
      datetime: response.data.dt
    }

    next()
  } catch (err) {
    next(err)
  }
}



module.exports = OpenWeatherByIp