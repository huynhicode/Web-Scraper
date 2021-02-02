import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.scss";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>{children}</main>
    <div className={styles.spacer} />
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
