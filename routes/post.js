const router = require('express').Router()
const { validate_connection } = require('../controllers/post')


// // Upload Artifacts

router.post('/validate_connection', validate_connection)

module.exports = router