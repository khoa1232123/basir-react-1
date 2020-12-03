import { userTypes } from '../types';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.USER_SIGNIN_REQUEST:
      return { ...state, loading: true, error: null };

    case userTypes.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        error: null,
      };
    case userTypes.USER_SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case userTypes.USER_SIGNOUT:
      return {
        ...state,
        userInfo: null,
      };
    case userTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        error: null,
      };
    case userTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
