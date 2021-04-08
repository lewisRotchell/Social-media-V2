import {
  GET_NEWSFEED,
  GET_NEWSFEED_FAIL,
  GET_NEWSFEED_REQUEST,
  CLEAR_POSTS,
  ADD_POST,
  ADD_POST_FAIL,
  DELETE_POST,
  DELETE_POST_FAIL,
  TOGGLE_LIKES,
  TOGGLE_LIKES_FAIL,
} from "./PostTypes";

const initialState = {
  loading: true,
  error: null,
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWSFEED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_NEWSFEED:
      return {
        ...state,
        loading: false,
        posts: payload,
        error: false,
      };

    case GET_NEWSFEED_FAIL:
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
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TOGGLE_LIKES: {
      return {
        ...state,
        loading: false,

        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
      };
    }
    case TOGGLE_LIKES_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
};
