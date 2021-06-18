import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const defaultState = {
  name: "x",
  data: null,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.name };
    default:
      return { ...state };
  }
};

//const store = createStore(reducer, applyMiddleware(thunk));

export default reducer;
