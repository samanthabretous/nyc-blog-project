import {
  GET_ALL_BLOG_POSTS_DATA, 
  CREATE_BLOG_POST,
  GET_SINGLE_BLOG_POST_DATA, 
  HANDLE_BLOGFORM_CHANGE, 
  ADD_CATEGORY_TO_NEW_BlOGPOST, 
  MOVE_SINGLE_TO_NEW_ENTRY
} from '../actions/types'

const INTIAL_STATE = {
  categories: {
    "Fun Stuff": ["Things to Do"], 
    "Food": ["I would not eat that"],
    "Subway": ["OH MY the Subway"], 
    "Hating":["What are Humans", "I just need to leave NYC"]
  }, 
  data:[],
  singleBlogData: []
}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_BLOG_POSTS_DATA: 
      console.log(Object.assign({}, state, {data: action.payload}))
      return Object.assign({}, state, {data: action.payload});
    case CREATE_BLOG_POST:
      return Object.assign({}, state, {data: [...state.data, action.payload]})
    case GET_SINGLE_BLOG_POST_DATA: 
      return Object.assign({}, state, {singleBlogData: action.payload});
    default: 
      return state
  }
}