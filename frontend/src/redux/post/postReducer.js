import {
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  CLEAR_POSTS,
  ADD_POST,
  ADD_POST_FAIL,
} from "./PostTypes";

const initialState = {
  loading: true,
  error: null,
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        posts: [],
        error: payload,
      };
    case ADD_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        loading: false,
        posts: [],
      };
    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
      };
    default:
      return state;
  }
};
