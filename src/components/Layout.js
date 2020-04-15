import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
