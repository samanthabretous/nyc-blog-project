import { createStore } from 'redux';
import reducer from './reducers/mainReducer';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer)

export default store