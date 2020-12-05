import Axios from 'axios';
import { cartTypes, orderTypes } from '../types';

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: orderTypes.ORDER_CREATE_REQUEST });
  try {
    console.log(order);
    const {
      user: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const { data } = await Axios.post('/api/orders', order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: orderTypes.ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: cartTypes.CART_EMPTY });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: orderTypes.ORDER_CREATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
