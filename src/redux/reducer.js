import { ADD_SHOPPING, DELETE_SHOPPING } from "./action";

const initialState = {
    shopping: [],
  price: 0,

  
};

// with spread

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING:
      return { 
        ...state,
        price: action.payload,
       };
    case DELETE_SHOPPING:
      return { ...state, shopping: state.shopping.slice(0, -1) };

    default:
        return state;
    }
};

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

export default reducer;