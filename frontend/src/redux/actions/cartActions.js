import Axios from 'axios';
import { cartTypes } from '../types';

export const getCart = () => async (dispatch) => {
  dispatch({ type: cartTypes.GET_CART_ITEM_REQUEST });
  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
  dispatch({ type: cartTypes.GET_CART_ITEM_SUCCESS, payload: cartItems });
};

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const {
    cart: { cartItems },
  } = getState();

  const { data } = await Axios.get(`/api/products/${productId}`);
  const newItem = {
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    product: data._id,
    qty,
  };
  let payload = [];
  console.log(getState());
  // eslint-disable-next-line array-callback-return
  const existItem = cartItems.find((x) => x.product === newItem.product);
  console.log({ newItem, existItem });
  if (existItem) {
    payload = cartItems.map((x) =>
      x.product === existItem.product ? newItem : x
    );
  } else {
    payload = [...cartItems, newItem];
  }
  localStorage.setItem('cartItems', JSON.stringify(payload));
  console.log(payload);
  dispatch({ type: cartTypes.CART_ADD_ITEM_SUCCESS, payload });
};

export const removeToCart = (productId) => async (dispatch) => {
  dispatch({ type: cartTypes.CART_REMOVE_ITEM_REQUEST });

  let cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

  cartItems = cartItems.filter((x) => x.product !== productId);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  dispatch({ type: cartTypes.CART_REMOVE_ITEM_SUCCESS, payload: cartItems });
};

export const saveShippingAddress = (data) => (dispatch) => {
  localStorage.setItem('shippingAddress', JSON.stringify(data));
  dispatch({ type: cartTypes.CART_SHIPPING_ADDRESS, payload: data });
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: cartTypes.CART_PAYMENT_METHOD, payload: data });
};
