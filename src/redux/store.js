import { combineReducers, legacy_createStore } from "redux";

import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
  CartReducer,
});
const store = legacy_createStore(rootReducer);
export default store;
