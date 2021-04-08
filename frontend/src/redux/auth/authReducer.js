import {
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_LOADED,
  AUTH_LOADED_FAIL,
  AUTH_LOAD_REQUEST,
} from "./authTypes";

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
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        isAuth: true,
      };
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        isAuth: true,
      };
    case AUTH_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOADED:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        isAuth: true,
      };
    case AUTH_LOGIN_FAIL:
    case AUTH_LOADED_FAIL:
    case AUTH_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: payload,
        token: null,
        isAuth: false,
      };
    case AUTH_LOGOUT:
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
