// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import {store} from '../store.js';

// ************************************ IMPORT REDUCERS ************************************
import authorFormReducer from './authorFormReducer.js';
import blogReducer from './blogReducer.js';

// ************************************ COMBINE REDUCERS ************************************
const rootReducer = combineReducers({
  authorFormReducer, 
  blogReducer
})

export default rootReducer;