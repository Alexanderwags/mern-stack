import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <form>
      <input type="text" />
    </form>
  );
}

Form.propTypes = {
  props: PropTypes.string,
};

export default Form;
