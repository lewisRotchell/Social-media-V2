import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOADED,
  USER_LOADED_FAIL,
  USER_LOAD_REQUEST,
} from "./userTypes";

const initialState = {
  userInfo: null,
  loading: true,
  error: null,
  token: null,
  isAuth: false,
};

export const userLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        isAuth: true,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        isAuth: true,
      };
    case USER_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        isAuth: true,
      };
    case USER_LOGIN_FAIL:
    case USER_LOADED_FAIL:
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: payload,
        token: null,
        isAuth: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loading: false,
        userInfo: null,
        token: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
