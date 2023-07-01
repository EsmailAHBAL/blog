/* eslint-disable @next/next/next-script-for-ga */
import { type AppType } from "next/app";


import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import Seo from "components/Seo";



const MyApp: AppType = ({ Component, pageProps }) => {
  return(
    <>

    <DefaultSeo {...Seo}/>
    <Component {...pageProps} />
    </>

  )
  
};

export default MyApp