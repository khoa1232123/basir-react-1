import { userTypes } from '../types';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  loading: false,
  error: null,
  userDetails: null,
  success: false,
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
    case userTypes.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userTypes.USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: payload,
        error: null,
      };
    case userTypes.USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case userTypes.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case userTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        error: null,
        success: true,
      };
    case userTypes.USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
      };
    default:
      return state;
  }
};
