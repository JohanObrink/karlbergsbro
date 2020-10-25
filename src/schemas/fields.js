const { Slug, File } = require('@keystonejs/fields')
const fileAdapter = require('../fileAdapter')
const { CloudinaryAdapter } = require('@keystonejs/file-adapters')
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image')

const slug = (props = {}) => Object.assign({
  type: Slug,
  isUnique: true,
  access: {
    create: false,
    read: true
  },
}, props)

const file = (props = {}) => Object.assign({
  type: File,
  adapter: fileAdapter
}, props)

const imageAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  folder: 'karlbergsbro',
})

const image = (props = {}) => Object.assign({
  type: CloudinaryImage,
  adapter: imageAdapter,
}, props)

module.exports = { slug, file, image }
