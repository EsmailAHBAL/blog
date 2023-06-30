/* eslint-disable @next/next/next-script-for-ga */
import { type AppType } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";


import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import Seo from "components/Seo";



const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <>
      <GoogleAnalytics trackPageViews />

    <DefaultSeo {...Seo}/>
    <Component {...pageProps} />
    </>

  )
  
};

export default MyApp