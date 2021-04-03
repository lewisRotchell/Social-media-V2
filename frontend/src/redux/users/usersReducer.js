import {
  USERS_SEARCH_REQUEST,
  USERS_SEARCH_SUCCESS,
  USERS_SEARCH_FAIL,
  USERS_SEARCH_CLEAR,
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
        user: false,
      };
    case USERS_SEARCH_FAIL:
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
