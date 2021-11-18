async function ErrorHandler(err, req, res, next) {
  let errorCode = 500
  let errorMessage = "Internal Server Error"

  if(err.name === "NOT_FOUND_CITY") {
    errorCode = 404
    errorMessage = "City is Not Found in Our Database"
  }

  res.status(errorCode).json({
    message: errorMessage
  })
}

module.exports = ErrorHandler