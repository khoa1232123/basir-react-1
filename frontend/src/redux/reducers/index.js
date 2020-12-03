import productReducers from './productReducers';
import cartReducers from './cartReducers';
import userReducers from './userReducers';
import { combineReducers } from 'redux';

// window.store.getState()

const rootReducer = combineReducers({
  product: productReducers,
  cart: cartReducers,
  user: userReducers,
});

export default rootReducer;
