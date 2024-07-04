
// const ADD_SHOPPING = 'shopping/add';
// const DELETE_SHOPPING = 'shopping/delete';

// const addShopping = (data) => {
//     return {
//       type: ADD_SHOPPING,
//       payload: data,
//     };
//   };
  
//   const deleteShopping = (data) => {
//     return {
//       type: DELETE_SHOPPING,
//       payload: data,
//     };
//   };
//   const initialState = {
//     shopping: [],
//   step: "00.0",
// };

// // with spread

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_SHOPPING:
//       return { ...state, shopping: [...state.shopping, action.payload] };
//     case DELETE_SHOPPING:
//       return { ...state, shopping: state.shopping.slice(0, -1) };

//     default:
//         return state;
//     }
// };
// import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// const store = createStore(reducer, composeWithDevTools());

// export default store;