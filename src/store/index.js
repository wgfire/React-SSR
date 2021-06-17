import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import home from "./home";

const reducer = combineReducers({
  home,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
