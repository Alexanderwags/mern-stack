import React from "react";
import PropTypes from "prop-types";
import Card from "componets/Card";
import Styles from "./styles/Styles.module.scss";
function Layout(props) {
  return (
    <div className={Styles.layout}>
      <Card />
    </div>
  );
}

Layout.propTypes = {
  props: PropTypes.string,
};

export default Layout;
