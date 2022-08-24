import { combineReducers } from "redux";
import pendinginDataReducer from "./pendinginDataReducer";
import userDataReducer from "./userDataReducer";

const rootReducer = combineReducers({ pendinginDataReducer, userDataReducer });

export default rootReducer;