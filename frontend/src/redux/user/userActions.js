import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { getPosts } from "../post/postActions";
import {
  USER_LOAD_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOADED,
  USER_LOADED_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "./userTypes";

export const loadUser = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    dispatch({
      type: USER_LOAD_REQUEST,
    });

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const { data } = await axios.get("/api/auth/profile", config);

    dispatch({
      type: USER_LOADED,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOADED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {};

    const { data } = await axios.post(
      "api/auth/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.token,
    });

    localStorage.setItem("token", JSON.stringify(data.token));
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const { data } = await axios.post("/api/auth/register", body, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.token,
    });

    localStorage.setItem("token", JSON.stringify(data.token));
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: USER_LOGOUT });
};
