import { combineReducers } from "redux";
import doItReducer from "./doItReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  doits: doItReducer,
  user: userReducer
});

export default rootReducer;
