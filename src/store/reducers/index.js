import { combineReducers } from "redux";
import pendinginDataReducer from "./pendinginDataReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({ pendinginDataReducer, loginReducer });

export default rootReducer;