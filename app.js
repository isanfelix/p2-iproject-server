if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const app = express()
const port = process.env.port || 3000

const { User } = require('./models/index')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => {
  console.log(`Listening port : ${port} with url http://127.0.0.1:${port}`);
}) 