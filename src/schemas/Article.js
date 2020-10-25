const { Text, Relationship } = require('@keystonejs/fields')
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
    parent: {
      type: Relationship,
      ref: 'Article.children',
    },
    children: {
      type: Relationship,
      ref: 'Article.parent',
      many: true,
    },
  },
}
