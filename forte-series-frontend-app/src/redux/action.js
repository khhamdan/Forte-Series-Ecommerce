import { ADD_TO_CART } from './contant';

export const cartData = (data) => {
  console.log('action called ______>', data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
