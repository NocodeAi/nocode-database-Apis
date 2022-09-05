const router = require('express').Router()
const { validate_connection,execute_query } = require('../controllers/post')


// // Upload Artifacts

router.post('/validate_connection', validate_connection)
router.post('/execute_query', execute_query)


module.exports = router