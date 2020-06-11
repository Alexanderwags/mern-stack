import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ADD_TASK } from "./actions";
import { getData } from "Api/index.js";
const initialStore = {
  task: [],
};

const taskReducer = (state = initialStore, action) => {
  if (action.type === "ADD_TASK") {
    console.log("entro");
    let data = getData();

    return {
      ...state,
      task: state.task.concat(data),
    };
  }

  return state;
};
export default createStore(
  combineReducers({ taskReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
