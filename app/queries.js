import { gql } from '@apollo/client'

export const GET_STARTPAGE = gql`
  query {
    allStarts {
      id
      name
      image {
        publicUrl
      }
      headline
      text
      pages {
        title
        slug
      }
      facebook
      instagram
    }
  }`
