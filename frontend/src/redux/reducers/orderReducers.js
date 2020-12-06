import { orderTypes } from '../types';

const initialState = {
  loading: false,
  orderD: [],
  error: null,
  success: false,
  orderDetails: {},
  orderList: [],
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
        orderD: payload,
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

    case orderTypes.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case orderTypes.ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, orderDetails: payload };
    case orderTypes.ORDER_DETAILS_FAILURE:
      return { ...state, loading: false, error: payload };

    case orderTypes.ORDER_MINE_LIST_REQUEST:
      return { ...state, loading: true };
    case orderTypes.ORDER_MINE_LIST_SUCCESS:
      return { ...state, loading: false, orderList: payload };
    case orderTypes.ORDER_MINE_LIST_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
