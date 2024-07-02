import { ADD_SHOPPING, DELETE_SHOPPING } from "./action";

const initialState = {
    shopping: [],
  step: "00.0",
};

// with spread

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING:
      return { ...state, shopping: [...state.shopping, action.payload] };
    case DELETE_SHOPPING:
      return { ...state, shopping: state.shopping.slice(0, -1) };
    //   case CLEAR_GUESS:
    //     return { ...state, guesses: [] };
    //   case STEP:
    //     return { ...state, step: state.step + 1 };
    //   case CLEAR_STEP:
    //     return { ...state, step: 1 };
    default:
        return state;
    }
};

export default reducer;










// wrapping the reducer into produce function
// const reducer = produce((state, action) => {
//   switch (action.type) {
//     case ADD_GUESS:
//       state.guesses.push(action.payload);
//       break;
//     case DELETE_GUESS:
//       state.guesses.splice(state.guesses.length - 1, 1);
//       break;
//     case CLEAR_GUESS:
//       state.guesses = [];
//       break;
//     case STEP:
//       state.step = state.step + 1;
//       break;
//     default:
//       return state;
//   }
// }, initialState);

// with produce method and draft callback

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_GUESS:
//       const nextState = produce(state, (draft) => {
//         draft.guesses.push(action.payload);
//       });

//       return nextState;
//     case DELETE_GUESS:
//       return produce(state, (draft) => {
//         draft.guesses.splice(draft.guesses.length - 1, 1);
//       });

//     case CLEAR_GUESS:
//       return { ...state, guesses: [] };
//     case STEP:
//       return { ...state, step: state.step + 1 };
//     default:
//       return state;
//   }
// };


// import { ADD_FLOWER } from "./action";
// const initState = {
//     flowers:[{
//         id:1,
//         title:'flower',
//         price :22,
//     }],
// }
// const FlowersReducer = (state=initState, action) => {
//   switch (action.typ) {
//     case ADD_FLOWER:
//        return state.flowers.push(action.payload);
//   }
// };
// export default FlowersReducer;
// const initialState = {
//   cart: [],
// };

// function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: [...state.cart, action.payload],
//       };
//     default:
//       return state;
//   }
// }

// export default cartReducer;
