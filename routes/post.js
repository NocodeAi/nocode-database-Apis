const router = require('express').Router()
const { validate_connection,execute_query,get_column_list } = require('../controllers/post')


// // Upload Artifacts

router.post('/validate_connection', validate_connection)
router.post('/execute_query', execute_query)
router.post('/get_column_list', get_column_list)


module.exports = router