import {
  USERS_SEARCH_REQUEST,
  USERS_SEARCH_SUCCESS,
  USERS_SEARCH_FAIL,
  USERS_SEARCH_CLEAR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "./usersTypes";

const initialState = {
  userList: [],
  user: false,
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_SEARCH_REQUEST:
      return {
        userList: [],
        loading: true,
        user: false,
      };
    case USERS_SEARCH_SUCCESS:
      return {
        userList: payload,
        loading: false,
      };
    case GET_USER_REQUEST:
      return {
        loading: true,
        user: false,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case GET_USER_FAIL:
    case USERS_SEARCH_FAIL:
      return {
        UserList: [],
        loading: false,
        user: false,
        error: payload,
      };
    case USERS_SEARCH_CLEAR:
      return {
        UserList: [],
        loading: false,
        user: false,
      };
    default:
      return state;
  }
};
