import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ADD_TASK } from "./actions";
import { getData } from "Api";
const initialStore = {
  task: [],
};

const taskReducer = (state = initialStore, action) => {
  console.log("global", action);
  switch (action) {
    case action.type === ADD_TASK:
      const data = getData();
      return {
        ...state,
        task: state.task.concat(data),
      };
    default:
      return state;
  }
  return state;
};
export default createStore(
  combineReducers({ taskReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
