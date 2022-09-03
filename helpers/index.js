const _ = require('lodash')
const moment = require('moment')
const { runQuery } = require('context-helpers')
const { contextOltp } = require('../config')


const arrayIntoPostgresqlArray = (array) => ( //Convert JS Array into Bigquery Array, Use only for array of strings.
    Boolean(Array.isArray(array) && array?.length) ?
        `'{"${array.toString().split(",").join(`","`)}"}'`
        : `'{}'`
)

const forgotEmail = (user) => {
    const msg = {
        to: user.email,
        from: 'entrollics@gmail.com',
        subject: 'Update your password',
        text: `Hello ${user.first_name},
        <br/>
        <br/>
        To update your password, Please click the link below:
        <br />
        <br />
        ${origin}/update-password/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 2 days, the link will be expired.
        Best regards,
        <br/>
        Context.
        `,
        html: `Hello ${user.first_name},
        <br/>
        <br/>
        To update your password, Please click the link below:
        <br />
        <br />
        ${origin}/update-password/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 2 days, the link will be expired.
        Best regards,
        <br/>
        Context.
        `
    }

    transporter.sendMail(msg)
}

const getAuthUrl = async (uri) => {
    if (uri && uri.length) {
        try {
            const expires = moment(moment(), 'MM-DD-YYYY').add(2, 'days')
            const bucketName = uri.split('/')[2]
            const myBucket = readStorage.bucket(bucketName)

            const config = {
                action: 'read',
                expires: expires,
                accessibleAt: expires
            }

            let file = myBucket.file(uri.replace(`gs://${bucketName}/`, ''))
            let [url] = await file.getSignedUrl(config)
            return url
        }
        catch (e) {
            return uri
        }
    }
    return undefined
}


const emailText = (user) => {
    const msg = {
        to: user.email,
        from: 'entrollics@gmail.com',
        subject: 'Verify Your Email',
        text: `Hello ${user.first_name},
        <br/>
        <br/>
        To complete your signup to Context, Please verify your email by clicking the link below:
        <br />
        <br />
        ${origin}/emailverification/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 1 day, the link will be expired.
        Best regards,
        <br/>
        Context.
        `,
        html: `Hello ${user.first_name},
        <br/>
        <br/>
        To complete your signup to Context, Please verify your email by clicking the link below:
        <br />
        <br />
        ${origin}/emailverification/${user.token}
        <br />
        <br />
        Alternatively, you can copy the link to your browser's address bar.
        <br />
        <br />
        If you don't use this link within 1 day, the link will be expired.
        Best regards,
        <br/>
        Context.`
    }

    transporter.sendMail(msg)
}

const checkValue = (id, index, user_id, folder_id) => {
    return new Promise(async (resolve, reject) => {
        let type = 'folder'
        if (!id) {
            const err = {
                share_index: index,
                artifact_id: id,
                err: 'Artifact id missing'
            }
            reject(err)
        }
        else {
            let sqlQuery = `SELECT EXISTS(SELECT * FROM artifacts WHERE id='${id}') as resp`

            const resp = await runQuery(contextOltp, sqlQuery)
            if (!resp[0].resp) {
                const err = {
                    share_index: index,
                    artifact_id: id,
                    err: `Artifact which you want to add does not exist`
                }
                reject(err)
            }
            else {
                sqlQuery = `SELECT EXISTS(SELECT * FROM share_artifacts WHERE (share_id='${folder_id}' AND artifact_id='${id}' AND type='${type}')) as resp`

                alreadySharedResp = await runQuery(contextOltp, sqlQuery)

                if (alreadySharedResp[0].resp) {
                    const err = {
                        share_index: index,
                        artifact_id: id,
                        err: `Artifact has already been added in this ${type}`
                    }
                    reject(err)
                }
                else {
                    const sqlQuery = `INSERT INTO share_artifacts VALUES('${id}',
                                       '${folder_id}','${user_id}','${type}')`

                    // Run the query
                    await runQuery(contextOltp, sqlQuery)
                        .then(() => {
                            const msg = {
                                share_index: index,
                                artifact_id: id,
                                message: `Artifact added Successfully`,
                            }
                            resolve(msg)
                        })
                        .catch((e) => {
                            const err = {
                                share_index: index,
                                artifact_id: id,
                                err: `Something Went Wrong! ${e.message}`,
                            }
                            reject(err)
                        })
                }
            }
        }
    })
}

const downloadFile = (uri, storage) => {//Here file name is actually the path of this file in bucket.
    return new Promise(async (resolve, reject) => {

        try {
            var match = uri?.match(/gs:\/\/(.+?)\/(.+)/i)
            const fileName = match?.[2]
            const bucketName = match?.[1]
            // console.log(bucketName,'==bucket',fileName,'==<filename',uri,'===<uri')

            const bucket = storage.bucket(bucketName)
            const file = bucket.file(fileName)


            //download the file in temporary destination of your server/pc
            await file.download().then(data => {
                if (data) {
                    // console.log("res", res, JSON.stringify(res))
                    var text = JSON.parse(data)

                    resolve(text)
                } else {
                    throw new Error(`Something went wrong when downloading file!`)
                }
            })
            // console.log("RESPONSE ==>",res)
            //  const readfile = await fs.promises.readFile(destination, console.error); //file buffer




        } catch (e) {
            console.error("error When Downloading Fiile ", e)
            reject(e)
        }

    })

}

module.exports = {
    emailText,
    forgotEmail,
    getAuthUrl,
    arrayIntoPostgresqlArray,
    checkValue,
    downloadFile
}