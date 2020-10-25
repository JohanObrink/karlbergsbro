import { useState, useEffect } from 'react'
import Head from 'next/head'
import Masthead from '../components/masthead'
import { getStartPage } from '../keystone'
import parse from 'html-react-parser'
import Feed from '../components/instagram/feed'

export default function StartPage (props) {
  const [page, setPage] = useState()
  useEffect(() => {
    getStartPage()
      .then(page => setPage(page))
      .catch(err => console.error(err))
  }, [])

  if (!page) return (<></>)
  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>
      <Masthead image={page.image?.publicUrl}>
        <h1>{page.headline}</h1>
      </Masthead>
      <div>{parse(page.text)}</div>
      <Feed username={page.instagram} />
    </>
  )
}
