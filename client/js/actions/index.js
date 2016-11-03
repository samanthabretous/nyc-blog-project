import store from '../store'
import {UPDATE_DATA, HANDLE_BLOGFORM_CHANGE} from './types'

export function updateStoreData(data) {
  store.dispatch({
    type: UPDATE_DATA,
    data
  })
}

export function newEntryFormStoreData(name, value) {
  store.dispatch({
    type: HANDLE_BLOGFORM_CHANGE,
    name,
    value
  })
}