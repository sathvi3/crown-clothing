import { combineReducers } from "redux";

import userReduceer from "./User/userReducer";

export default combineReducers({
  user: userReduceer,
});
