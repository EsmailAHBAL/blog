/* eslint-disable @next/next/next-script-for-ga */
import { type AppType } from "next/app";


import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import Seo from "components/Seo";
import { useEffect } from "react";
import { initGA, logPageView } from "lib/analytic";



const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return(
    <>

    <DefaultSeo {...Seo}/>
    <Component {...pageProps} />
    </>

  )
  
};

export default MyApp