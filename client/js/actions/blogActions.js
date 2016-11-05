import store from '../store'
import {
  UPDATE_DATA, 
  HANDLE_BLOGFORM_CHANGE, 
  ADD_CATEGORY_TO_NEW_BlOGPOST, 
  UPDATE_BLOG_DATA
} from './types'

export function updateStoreData(data) {
  store.dispatch({
    type: UPDATE_DATA,
    data
  })
}

export function updateBlogData(data) {
  store.dispatch({
    type: UPDATE_BLOG_DATA,
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

export function addCategoryToStore(name){
    store.dispatch({
    type: ADD_CATEGORY_TO_NEW_BlOGPOST,
    name
  })
}