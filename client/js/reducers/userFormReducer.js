import {HANDLE_NEW_USER_FORM} from '../actions/types.js';

const _initialState = {
  _id: '5827873a9d2340f7fff3e7d4', 
  firstName: 'Victoria',
  lastName: "Mack",
  email: 'victoria_mack24@gmail.com',
  location: "12345",
  bio: "Hi I am Victoria. I need to fill in some information about myself, and I do not seem to know what to write about. But that is okay because I am a dummy user and I do not have an actual brain that is capable of writing my own bio. Duh!!", 
  owner: true
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