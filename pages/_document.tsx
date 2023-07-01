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
          <meta name="keywords" 
          content="web leaders, webleaders, maroc, morocco" />
        <meta name="keywords" 
          content="cod newtwok, cod afirca,cod partner" />
                  <meta name="keywords"
                   content="affiliate, ecommerce, coding, Facebook ads" />
                           <meta name="keywords" 
                           content="simolife, amine raghib, make money,youtub" />


          <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=G-DVYVCV9LDT`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DVYVCV9LDT ', {
      page_path: window.location.pathname,
    });
        `}
</Script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Add custom scripts or other elements */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;