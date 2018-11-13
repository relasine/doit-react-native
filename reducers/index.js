import { combineReducers } from "redux";
import doItReducer from "./doItReducer";

const rootReducer = combineReducers({
  doits: doItReducer
});

export default rootReducer;
