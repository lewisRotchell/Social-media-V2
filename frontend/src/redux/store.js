import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadUserState } from "./redux-utils/localStorage";

import rootReducer from "./rootReducer";
const middlewares = [thunk];

const initialState = {
  userLogin: {
    token: loadUserState(),
    loading: true,
    userInfo: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
