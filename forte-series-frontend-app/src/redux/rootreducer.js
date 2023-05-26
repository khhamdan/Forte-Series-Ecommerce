import { combineReducers } from 'redux';
import cartReducer from './reducer';
const comReducer = combineReducers({
  cartAbc: cartReducer,
});

export default comReducer;
