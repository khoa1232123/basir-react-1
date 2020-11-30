import { productTypes } from '../types';

const initialState = {
  products: [],
  loading: false,
  error: null,
  productDetails: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case productTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case productTypes.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case productTypes.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case productTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: payload,
      };
    case productTypes.PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
