import store from '../store'
import {
  GET_ALL_BLOG_POSTS_DATA, 
  GET_SINGLE_BLOG_POST_DATA, 
  HANDLE_BLOGFORM_CHANGE, 
  ADD_CATEGORY_TO_NEW_BlOGPOST, 
  MOVE_SINGLE_TO_NEW_ENTRY
} from './types'



//send one blog to the store
export function getSingleBlogPostData(data) {
  store.dispatch({
    type: GET_SINGLE_BLOG_POST_DATA,
    payload: data
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

export function moveSingleBlogDataToNewEntryBlogData(){
  store.dispatch({
    type: MOVE_SINGLE_TO_NEW_ENTRY
  })
}