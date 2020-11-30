import productReducers from './productReducers';
import { combineReducers } from 'redux';

// window.store.getState()

const rootReducer = combineReducers({
  product: productReducers,
});

export default rootReducer;
