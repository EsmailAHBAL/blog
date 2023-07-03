// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // Add any custom logic here, if needed
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Add custom meta tags, stylesheets, or other elements */}
          <link rel="icon" href="/falcon.png" />
          

          <meta name="keywords" 
          content="web leaders, webleaders, maroc, morocco" />
        <meta name="keywords" 
          content="cod newtwok, cod afirca,cod partner" />
                  <meta name="keywords"
                   content="affiliate, ecommerce, coding, Facebook ads" />
                           <meta name="keywords" 
                           content="simolife, amine raghib, make money,youtub" />

      <meta name="application-name" content='Web leaders' />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content='Web leaders' />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="none" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-tap-highlight" content="yes" />

      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="theme-color" content="#000000" />
          <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=G-DVYVCV9LDT`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DVYVCV9LDT', {
      page_path: window.location.pathname,
    });
        `}
</Script>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6468340789566102"
     crossorigin="anonymous"></script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TW2NRX8');</script>

        </Head>
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TW2NRX8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
