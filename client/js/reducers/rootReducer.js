// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import {store} from '../store.js';

// ************************************ IMPORT REDUCERS ************************************
import userFormReducer from './userFormReducer.js';
import blogReducer from './blogReducer.js';

// ************************************ COMBINE REDUCERS ************************************
const rootReducer = combineReducers({
  userFormReducer, 
  blogReducer
})

export default rootReducer;