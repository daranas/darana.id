import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="/static/assets/css/darana.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/assets/js/darana.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument