const { nocodeAi } = require('../config/db')
const { runQuery, apiResponse } = require('nocodeAi-helpers')
const { v4: uuidv4 } = require('uuid')
const { Sequelize } = require('sequelize')



const validate_connection = async (req,res) => 
{
   const {username,password,host,dialect,port,database,project_id} = req?.body

   console.log(username,password,host,dialect,port)
   const config = {
    username,
    password,
    database,
    host,
    dialect,
    port
}
   try {
    let db = new Sequelize({ ...config, ssl: true, pool: { maxConnections: 50, maxIdleTime: 30 }, language: 'en' })
    console.log('connecting...')
    await db.authenticate()
    console.log('database is connected successfully...')
    db.sync()
    let id = uuidv4()
    let sql = `INSERT INTO public.databases(
        id, project_id, user_name, password, database_name, host, port, type, is_deleted, created_at, updated_at)
        VALUES ('${id}', '${project_id}', '${username}', '${password}', '${database}', '${host}', ${port}, '${dialect}', false, NOW(), NOW())`
    await runQuery(nocodeAi,sql)
    let obj = {
        success:true,
        message:'database is connected successfully'
    }
    apiResponse(res,200,obj)
   }
   catch(error){
    let obj = {
        success:false,
        message:error
    }
    apiResponse(res,500,obj)
   }

}

module.exports = {
    validate_connection
}