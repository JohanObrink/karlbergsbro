const { Text } = require('@keystonejs/fields')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce')
const { slug, file } = require('./fields')

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    slug: slug({ from: 'title' }),
    description: {
      type: Wysiwyg,
    },
    image: file(),
    instagram: {
      type: Text,
    },
  },
}
