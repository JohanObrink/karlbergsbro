import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_STARTPAGE } from './queries'

const client = new ApolloClient({
  uri: '/admin/api',
  cache: new InMemoryCache(),
})

export async function getStartPage () {
  const result = await client.query({ query: GET_STARTPAGE })
  const pages = result?.data?.allStarts || []
  return pages[0]
}
