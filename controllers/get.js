const { nocodeAi } = require('../config/db')
const { runQuery, apiResponse } = require(process.env.nocode_helpers)
const { v4: uuidv4 } = require('uuid')


const get_column_list = async(req,res) =>
{
    const { formId,project_id } = req?.query
    
}

module.exports = {
    get_column_list
}