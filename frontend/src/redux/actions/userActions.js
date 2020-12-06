import Axios from 'axios';
import { userTypes } from '../types';

export const userSignin = (email, password) => async (dispatch) => {
  dispatch({ type: userTypes.USER_SIGNIN_REQUEST });
  try {
    const { data } = await Axios.post('/api/users/signin', { email, password });

    localStorage.setItem('userInfo', JSON.stringify(data));

    dispatch({ type: userTypes.USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: userTypes.USER_SIGNIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userSignout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.clear();
  dispatch({ type: userTypes.USER_SIGNOUT });
};

export const userRegister = (name, email, password) => async (dispatch) => {
  dispatch({ type: userTypes.USER_REGISTER_REQUEST });
  try {
    const { data } = await Axios.post('/api/users/register', {
      name,
      email,
      password,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));

    dispatch({ type: userTypes.USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: userTypes.USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDetailsUser = () => async (dispatch, getState) => {
  dispatch({ type: userTypes.USER_DETAILS_REQUEST });
  try {
    const {
      user: { userInfo },
    } = getState();
    const { data } = await Axios.get(`/api/users/getuserdetails`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log(data);
    dispatch({ type: userTypes.USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.datmessage
        : error.message;
    dispatch({ type: userTypes.USER_DETAILS_FAILURE, payload: message });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: userTypes.USER_UPDATE_REQUEST });
  try {
    const {
      user: { userInfo },
    } = getState();
    const { data } = await Axios.post(`/api/users/update`, user, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log(data);
    dispatch({ type: userTypes.USER_UPDATE_SUCCESS, payload: data });
    dispatch({ type: userTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.datmessage
        : error.message;
    dispatch({ type: userTypes.USER_DETAILS_FAILURE, payload: message });
  }
};
