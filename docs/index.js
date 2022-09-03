const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const tags = require('./tags')
const artifact = require('./artifact')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...artifact
}