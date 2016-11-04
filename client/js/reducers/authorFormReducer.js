import {HANDLE_NEW_AUTHOR_FORM} from '../actions/types.js';

const _initialState = {
  firstName: "",
  lastName: "",
  email: "",
  location: "",
  bio: ""
}

export default function authorFormReducer(state = _initialState, action) {
  let stateCopy = Object.assign({}, state)
  switch(action.type) {
    case HANDLE_NEW_AUTHOR_FORM:
      stateCopy[action.name] = action.value;
      console.log('STATE COPY:', stateCopy)
      return stateCopy;
    default:
      return stateCopy;
  }
}