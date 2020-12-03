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
