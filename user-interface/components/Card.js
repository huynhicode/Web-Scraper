import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.scss";

const Card = ({ url, html }) => (
  <div className={styles.card}>
    <p>{url}</p>
    <p className={styles.html}>{html}</p>
  </div>
);

Card.propTypes = {
  url: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default Card;
