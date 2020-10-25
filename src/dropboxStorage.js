const adapter = require('keystone-storage-adapter-dropbox')
const { keystone } = require('./keystone')

const storage = new keystone.Storage({
  adapter,
  dropbox: {
      accessToken: process.env.DROPBOX_ACCESS_TOKEN,// your dropbox-app access token
      path: '/uploads',// any path
  },
  path: '/uploads',
  schema: {
    filename: true,
    path_display: true,
    path: true,
    id: true,
    url: true,
    originalname: true,   // the original (uploaded) name of the file; useful when filename generated
  },
})

module.exports = storage
