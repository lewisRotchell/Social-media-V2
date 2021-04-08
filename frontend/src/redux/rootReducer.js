import { combineReducers } from "redux";
import { userLoginReducer } from "./auth/authReducer";
import { postReducer } from "./post/postReducer";
import { usersReducer } from "./users/usersReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  post: postReducer,
  users: usersReducer,
});

export default rootReducer;
