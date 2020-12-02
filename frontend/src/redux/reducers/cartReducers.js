import { cartTypes } from '../types';

const initialState = {
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.GET_CART_ITEM_REQUEST:
      return { ...state, loading: true };
    case cartTypes.GET_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: payload,
      };
    case cartTypes.CART_ADD_ITEM_REQUEST:
      return { ...state, loading: true };
    case cartTypes.CART_ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: payload,
      };

    case cartTypes.CART_REMOVE_ITEM_REQUEST:
      return { ...state, loading: true };
    case cartTypes.CART_REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: payload,
      };

    default:
      return state;
  }
};
