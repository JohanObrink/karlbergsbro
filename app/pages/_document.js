import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'
import Header from '../components/header'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="sv" className="h-100">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className="d-flex h-100 text-center text-black bg-light">
          <div className="d-flex w-100 h-100 mx-auto flex-column">
            <Header />
            <main>
              <Main />
            </main>
            <Footer />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
