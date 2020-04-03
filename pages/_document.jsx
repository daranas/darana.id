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
          {/* meta */}
          <meta name="google-site-verification" content="cOErl_-xqSE5_sMRXfDNGqAEv6aFtZv1MC_eJUDOHCA" />
          <meta name="description" content="DaranaSV is a freelance frontend web developer, web programmer based in Bandung, Indonesia. Focusing on web development with HTML, CSS, JavaScript and PHP." />
          <meta name="keywords" content="indonesia, bandung, freelance, remote, web design, design, web, developer, website, HTML, CSS, JavaScript, Vue, Nuxt, React, jQuery, SCSS, responsive, mobile"/>
          <meta name="author" content="DaranaSV"></meta>
          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@daranasv" />
          <meta name="twitter:title" content="DaranaSV - Freelance Frontend Web Developer Bandung" />
          <meta name="twitter:description" content="DaranaSV is a freelance frontend web developer, web programmer based in Bandung, Indonesia. Focusing on web development with HTML, CSS, JavaScript and PHP" />
          <meta name="twitter:creator" content="@daranasv" />
          <meta name="twitter:image:src" content="https://darana.id/assets/images/darana.png" />
          {/* facebook */}
          <meta property="og:site_name" content="DaranaSV - Freelance Frontend Web Developer Bandung" />
          <meta property="og:description" content="DaranaSV is a freelance frontend web developer, web programmer based in Bandung, Indonesia. Focusing on web development with HTML, CSS, JavaScript and PHP" />
          <meta property="og:url" content="https://darana.id/" />
          <meta property="og:title" content="DaranaSV" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://darana.id/assets/images/darana.png" />
          <meta name="theme-color" content="#000000" />
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