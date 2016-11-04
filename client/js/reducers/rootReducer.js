// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import {store} from '../store.js';

// ************************************ IMPORT REDUCERS ************************************
import authorFormReducer from './authorFormReducer.js';

// ************************************ COMBINE REDUCERS ************************************
const rootReducer = combineReducers({
  authorFormReducer
})

export default rootReducer;