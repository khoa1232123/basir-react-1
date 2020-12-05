import { orderTypes } from '../types';

const initialState = {
  loading: false,
  orderList: [],
  error: null,
  success: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case orderTypes.ORDER_CREATE_REQUEST:
      return { ...state, loading: true };
    case orderTypes.ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        orderList: payload,
        success: true,
      };
    case orderTypes.ORDER_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case orderTypes.ORDER_RESET:
      return initialState;

    default:
      return state;
  }
};
