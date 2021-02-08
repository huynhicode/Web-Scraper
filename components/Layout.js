import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Scraper</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="View the raw HTML from your favorite website(s)."
        />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
