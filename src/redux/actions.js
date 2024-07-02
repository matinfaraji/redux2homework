
import {
    ADD_SHOPPING,
    DELETE_SHOPPING,
  } from './actions.js';
  
  const addShopping = (data) => {
    return {
      type: ADD_SHOPPING,
      payload: data,
    };
  };
  
  const deleteShopping = (data) => {
    return {
      type: DELETE_SHOPPING,
      payload: data,
    };
  };

  export { addShopping, deleteShopping };