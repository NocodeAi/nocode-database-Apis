const { nocodeAi } = require('../config/db')
const { runQuery, apiResponse } = require('nocodeAi-helpers')
const { v4: uuidv4 } = require('uuid')
const { Sequelize } = require('sequelize')



const validate_connection = async (req, res) => {
    const { username, password, host, dialect, port, database, project_id } = req?.body

    console.log(username, password, host, dialect, port)
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
        let sqlValidation = `select * from databases where project_id='${project_id}'and database_name='${database}'and user_name='${username}'and password='${password}' and host='${host}' and type='${dialect}' and port=${port} and is_deleted is not true`
        let result = await runQuery(nocodeAi, sqlValidation)
        if (!result.length) {
            let sql = `INSERT INTO public.databases(
        id, project_id, user_name, password, database_name, host, port, type, is_deleted, created_at, updated_at)
        VALUES ('${id}', '${project_id}', '${username}', '${password}', '${database}', '${host}', ${port}, '${dialect}', false, NOW(), NOW())`
            await runQuery(nocodeAi, sql)
        }
        let obj = {
            success: true,
            message: 'database is connected successfully'
        }
        apiResponse(res, 200, obj)
    }
    catch (error) {
        let obj = {
            success: false,
            message: error
        }
        apiResponse(res, 500, obj)
    }

}

const execute_query = async (req, res) => {
    const { username, password, host, dialect, port, database, project_id, query } = req?.body

    console.log(username, password, host, dialect, port)
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
        const runQuery = async (db, query) => {
            let queryType = query?.split(' ')[0]?.toUpperCase()
            const data = await db.query(query, { type: db?.QueryTypes?.[queryType] })
            return Array.isArray(data) ? data?.flat() : data
        }
        let result = await runQuery(db, query)
        let obj = {
            success: true,
            data: result
        }
        apiResponse(res, 200, obj)
    }
    catch (error) {
        let obj = {
            success: false,
            message: error
        }
        apiResponse(res, 500, obj)
    }
}

module.exports = {
    validate_connection,
    execute_query
}