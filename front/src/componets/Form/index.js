import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Styles from "./styles/Styles.module.scss";
import { senData } from "Api";
import { connect } from "react-redux";
import { addToCart } from "Redux/actionCreator";

function Form(props) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  console.log("state task : ", props.task);
  function addTask(e) {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    senData(newTask);
    props.addTaskGlobal();
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
const mapStateToProps = (state) => ({
  task: state.taskReducer.task,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskGlobal() {
    dispatch(addToCart);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
