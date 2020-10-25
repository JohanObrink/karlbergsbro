require('dotenv').config()
const { apps, keystone } = require('./src/keystone')
const Allotment = require('./src/schemas/Allotment')
const Article = require('./src/schemas/Article')
const Start = require('./src/schemas/Start')

keystone.createList('Start', Start)
keystone.createList('Allotment', Allotment)
keystone.createList('Article', Article)

module.exports = {
  keystone,
  apps,
}
