// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import {store} from '../store';

// ************************************ IMPORT REDUCERS ************************************
import userFormReducer from './userFormReducer';
import blogReducer from './blogReducer';

// ************************************ COMBINE REDUCERS ************************************
const rootReducer = combineReducers({
  //userFormReducer, 
  blogReducer
})

export default rootReducer;