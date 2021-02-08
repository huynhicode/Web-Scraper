import "../styles/globals.css";
import PropTypes from "prop-types";

function MyApp({ Component }) {
  return <Component />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default MyApp;
