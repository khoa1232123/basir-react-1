import Axios from 'axios';
import { productTypes } from '../types';

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: productTypes.PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({ type: productTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: productTypes.PRODUCT_LIST_FAILURE, payload: error });
  }
};
export const getProductDetails = (productId) => async (dispatch) => {
  dispatch({
    type: productTypes.PRODUCT_DETAILS_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: productTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: productTypes.PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
