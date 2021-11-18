const router = require('express').Router()
const weatherRoutes = require('./weatherRoutes')
const ErrorHandler = require('../middlewares/errorHandler')

router.use('/weather', weatherRoutes)


router.use(ErrorHandler)
module.exports = router