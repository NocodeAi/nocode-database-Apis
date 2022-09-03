require('dotenv').config()

const express = require('express')
const fs = require('fs')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs')
const app = express()
const server = require('http').createServer(app)
const { configureBucketCors } = require('./config')

app.use(bodyParser.json({ limit: '10000mb' }))

app.use(morgan('dev'))





app.use(cors())

const PORT = process.env.PORT || 8080

try {
  fs.rmSync('./uploads', { recursive: true })
}
catch (e) {

}

app.use('/api', require('./routes'), swaggerUI.serve, swaggerUI.setup(docs))

app.use(express.json({ limit: '10000mb' }))
app.use(express.urlencoded({
  limit: '10000mb',
  extended: true
}))

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

