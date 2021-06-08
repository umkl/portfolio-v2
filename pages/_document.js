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
            <link rel="shortcut icon" href="/assets/Ungar_Website_Icon.ico" />
            <link
              rel="preload"
              href="/assets/fonts/ZCOOL_QingKe_HuangYou/ZCOOLQingKeHuangYou-Regular.ttf"
              as="font"
              crossOrigin=""
            />
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