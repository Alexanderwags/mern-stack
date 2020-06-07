import React from "react";
import PropTypes from "prop-types";
import PersistentDrawerLeft from "componets/Drawer";
function Header(props) {
  return (
    <div>
      <PersistentDrawerLeft />
    </div>
  );
}

Header.propTypes = {
  props: PropTypes.string,
};

export default Header;
