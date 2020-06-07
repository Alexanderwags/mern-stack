import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

function Form(props) {
  return (
    <form>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Task Title"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Task Description"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}

Form.propTypes = {
  props: PropTypes.string,
};

export default Form;
