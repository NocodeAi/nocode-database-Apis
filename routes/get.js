const router = require('express').Router()
const { get_column_list } = require('../controllers/get')

router.get('/get_column_list', get_column_list)
// router.get('/get_form', getForm)


module.exports = router