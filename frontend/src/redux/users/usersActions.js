import axios from "axios";
import {
  USERS_SEARCH_REQUEST,
  USERS_SEARCH_SUCCESS,
  USERS_SEARCH_FAIL,
  USERS_SEARCH_CLEAR,
} from "./usersTypes";

export const getUsers = (username) => async (dispatch) => {
  try {
    if (username === "") return;
    dispatch({
      type: USERS_SEARCH_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/get-users`,
      { username },
      config
    );

    dispatch({
      type: USERS_SEARCH_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: USERS_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearUsers = () => async (dispatch) => {
  dispatch({
    type: USERS_SEARCH_CLEAR,
  });
};
