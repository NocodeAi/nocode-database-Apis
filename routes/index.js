const express = require('express')
const router = express.Router()

router.use('/database', require('./post'))

router.use('/database', require('./get'))

module.exports = router