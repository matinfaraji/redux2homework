// import {legacy_createStore} from 'redux'
// import FlowersReducer from  './reducer'
// import { composeWithDevTools } from '@redux-devtools/extension';

// const store =  legacy_createStore(FlowersReducer,composeWithDevTools())
// export default store
// import { createStore } from 'redux';
// import cartReducer from './reducer';

// const store = createStore(cartReducer);

// export default store;
// store.js
// import { createStore } from 'redux';
// import rootReducer from './reducers'; // Create your reducers

// const store = createStore(rootReducer); // Pass your combined reducers

// export default store;
import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(reducer, composeWithDevTools());

export default store;