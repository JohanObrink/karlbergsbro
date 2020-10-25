const { Text, Relationship } = require('@keystonejs/fields')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce')
const { image } = require('./fields')

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    image: image(),
    headline: {
      type: Text,
      isRequired: true,
    }, 
    text: {
      type: Wysiwyg,
    },
    pages: {
      type: Relationship,
      ref: 'Article',
      many: true
    },
    facebook: {
      type: Text,
    },
    instagram: {
      type: Text,
    },
  },
}
