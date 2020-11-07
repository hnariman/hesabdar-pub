// combine all reducers into single file
import { combineReducers } from "redux";
import menu from "./menu";
import tableReducer from "./tableReducer";

export default combineReducers({ menu, tableReducer });
