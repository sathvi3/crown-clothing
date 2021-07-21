import { combineReducers } from "redux";

import userReduceer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";

export default combineReducers({
  user: userReduceer,
  cart: cartReducer,
});
