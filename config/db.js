const { sequelize } = require('nocodeAi-helpers')
const config = require('./config')

const connectDB = (cloudConfig = config) => sequelize.init(cloudConfig)

const nocodeAi = connectDB(config.development)



// module.exports = db;
module.exports = {
    nocodeAi
}