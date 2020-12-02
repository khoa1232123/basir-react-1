import productReducers from './productReducers';
import cartReducers from './cartReducers';
import { combineReducers } from 'redux';

// window.store.getState()

const rootReducer = combineReducers({
  product: productReducers,
  cart: cartReducers,
});

export default rootReducer;
