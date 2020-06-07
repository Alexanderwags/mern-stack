import React from "react";
import PropTypes from "prop-types";
import Form from "componets/Form";

function Card(props) {
  return (
    <div>
      <Form />
    </div>
  );
}

Card.propTypes = {
  props: PropTypes.string,
};

export default Card;
