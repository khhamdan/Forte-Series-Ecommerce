import { createStore } from 'redux';
import comReducer from './rootreducer';

let store = createStore(comReducer);

export default store;
