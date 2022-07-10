import { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const updateLoadingStatus = () => setIsLoading(!isLoading);

    Router.events.on("routeChangeStart", updateLoadingStatus);
    Router.events.on("routeChangeComplete", updateLoadingStatus);

    return () => {
      Router.events.off("routeChangeStart", updateLoadingStatus);
      Router.events.off("routeChangeComplete", updateLoadingStatus);
    };
  }, [isLoading]);

  return isLoading ? (
    <div className="flip-up"> Loading...</div>
  ) : (
    <>
      <Head>
        <title> Portfolio Mamady KONTE</title>
        <meta name="description" content="portfolio mamady konte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <main className="mx-2.5 sm:mx-10">{children}</main>
        <Footer />
      </>
    </>
  );
};

export default Layout;
