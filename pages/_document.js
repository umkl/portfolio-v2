import Document, { Html, Head, Main, NextScript } from 'next/document'

class UngarDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
            <link rel="shortcut icon" href="/static/Ungar_Website_Icon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default UngarDocument