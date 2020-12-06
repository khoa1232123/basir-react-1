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
    console.log(data);
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

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: orderTypes.ORDER_DETAILS_REQUEST, payload: orderId });
  try {
    const {
      user: { userInfo },
    } = getState();
    const { data } = await Axios.get(`/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: orderTypes.ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.datmessage
        : error.message;
    dispatch({ type: orderTypes.ORDER_DETAILS_FAILURE, payload: message });
  }
};

export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: orderTypes.ORDER_MINE_LIST_REQUEST });
  const {
    user: { userInfo },
  } = getState();
  console.log('abc');
  try {
    const { data } = await Axios.get('/api/orders/mine', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: orderTypes.ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: orderTypes.ORDER_MINE_LIST_FAILURE, payload: message });
  }
};
