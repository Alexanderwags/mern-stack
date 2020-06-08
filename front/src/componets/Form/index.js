import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Styles from "./styles/Styles.module.scss";
function Form(props) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  function addTask(e) {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    fetch("http://localhost:4000/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  function onChangeTitle(e) {
    settitle(e.target.value);
  }
  function onChangeDescr(e) {
    setdescription(e.target.value);
  }
  return (
    <form className={Styles.form} onSubmit={addTask}>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Task Title"
        fullWidth
        margin="normal"
        onChange={onChangeTitle}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Task Description"
        fullWidth
        margin="normal"
        onChange={onChangeDescr}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  );
}

Form.propTypes = {
  props: PropTypes.string,
};

export default Form;
