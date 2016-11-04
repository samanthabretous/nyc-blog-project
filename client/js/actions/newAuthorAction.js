import {HANDLE_NEW_AUTHOR_FORM} from './types.js';

import store from '../store.js';

export default function newAuthorFormAction(name, value) {
  store.dispatch({
    type: HANDLE_NEW_AUTHOR_FORM,
    name,
    value
  })
}