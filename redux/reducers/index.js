import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import merchantReducer from './merchantReducer'
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  admin:merchantReducer,
  alert:alertReducer,
  users:userReducer,
  cart:cartReducer
});
