import Head from "next/head";
import React from "react";
import "../styles/globals.scss";
interface IMyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}
function MyApp({ Component, pageProps }: IMyAppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
