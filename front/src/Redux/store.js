import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ADD_TASK } from "./actions";
import { getData } from "Api";
const initialStore = {
  task: [
    {
      prueba: "prueba",
    },
  ],
};

const taskReducer = (state = initialStore, action) => {
  console.log("global", action);

  switch (action.type) {
    case "ADD_TASK":
      const data = getData();
      let file = state.task.concat(data);
      return {
        file,
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
