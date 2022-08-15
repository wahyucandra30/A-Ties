import { combineReducers } from "redux";
import carDataReducer from "./carDataReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({ carDataReducer, loginReducer });

export default rootReducer;