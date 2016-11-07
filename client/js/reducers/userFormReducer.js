import {HANDLE_NEW_USER_FORM} from '../actions/types.js';

const _initialState = {
  _id: '581e144da8de15a917da801a', 
  firstName: 'Victoria',
  lastName: "Mack",
  email: 'victoria_mack24@gmail.com',
  location: "12345",
  bio: "", 
  owner: false
}

// const _initialState = {
//   _id: "", 
//   firstName: "",
//   lastName: "",
//   email: "",
//   location: "",
//   bio: "", 
    //owner: false
// }


export default function userFormReducer(state = _initialState, action) {
  let stateCopy = Object.assign({}, state)
  switch(action.type) {
    case HANDLE_NEW_USER_FORM:
      stateCopy[action.name] = action.value;
      return stateCopy;
    default:
      return stateCopy;
  }
}