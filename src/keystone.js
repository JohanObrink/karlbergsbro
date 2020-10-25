const { Keystone } = require('@keystonejs/keystone')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { StaticApp } = require('@keystonejs/app-static')
const { NextApp } = require('@keystonejs/app-next')
const { KnexAdapter } = require('@keystonejs/adapter-knex')

const adapterConfig = {
  knexOptions: {
    connection: 'postgres://pguser:pgpassword@localhost/karlbergsbro'
  }
}
const keystone = new Keystone({
  adapter: new KnexAdapter(adapterConfig),
})

const apps = [
  new GraphQLApp(),
  new AdminUIApp({
    name: process.env.PROJECT_NAME || 'karlbergsbro',
    enableDefaultRoute: false
  }),
  new NextApp({ dir: 'app' }),
  new StaticApp({ path: '/', src: 'public' }),
]

module.exports = {
  apps,
  keystone
}
