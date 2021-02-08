import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.scss";

function Card({ url, html, error }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardUrl}>{url}</p>
      {html && <p className={styles.html}>{html}</p>}
      {error && (
        <p className={styles.error}>
          Error: please check that you have a valid URL.
        </p>
      )}
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  html: PropTypes.string,
  error: PropTypes.string,
};

Card.defaultProps = { html: "", error: "" };

export default Card;
