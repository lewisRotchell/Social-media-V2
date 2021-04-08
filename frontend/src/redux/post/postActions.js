import axios from "axios";
import {
  GET_NEWSFEED,
  GET_NEWSFEED_FAIL,
  CLEAR_POSTS,
  GET_NEWSFEED_REQUEST,
  ADD_POST,
  ADD_POST_FAIL,
  DELETE_POST,
  DELETE_POST_FAIL,
  TOGGLE_LIKES,
  TOGGLE_LIKES_FAIL,
} from "./PostTypes";
import setAuthToken from "../../utils/setAuthToken";

export const getNewsfeed = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_NEWSFEED_REQUEST,
    });
    const { data } = await axios.get("/api/post/newsfeed");

    dispatch({
      type: GET_NEWSFEED,
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: GET_NEWSFEED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearPosts = () => async (dispatch) => {
  dispatch({
    type: CLEAR_POSTS,
  });
};

export const addPost = (text) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post("/api/post", { text: text }, config);

    dispatch({
      type: ADD_POST,
      payload: data.post,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/post/${postId}`);
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const toggleLikes = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/api/post/like/${postId}`);

    dispatch({
      type: TOGGLE_LIKES,
      payload: { postId, likes: data.data },
    });
  } catch (error) {
    dispatch({
      type: TOGGLE_LIKES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
