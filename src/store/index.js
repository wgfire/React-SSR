import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import home from "./home";

const reducer = combineReducers({
  home,
});
//const store = createStore(reducer, applyMiddleware(thunk));



const getStore =(defaultState={})=>{
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}
export default getStore
