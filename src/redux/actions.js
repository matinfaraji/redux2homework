
import {
    ADD_SHOPPING,
    DELETE_SHOPPING,
  } from './action.js';
  
  const addShopping = (data) => {
    return {
      type: ADD_SHOPPING,
      payload: data,
    };
  };
  
  const deleteShopping = (index) => {
    return {
      type: DELETE_SHOPPING,
      payload: index,
    };
  };

  export { addShopping, deleteShopping };