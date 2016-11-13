import {
  GET_ALL_BLOG_POSTS_DATA, 
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
  singleBlogData: [],
  newBlogEntry: {
    blogTitle: '',
    blogAuthor: '',
    location: '', 
    bodyText: '', 
    categories: [],
    images: '',
  }
}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_BLOG_POSTS_DATA: 
      console.log(Object.assign({}, state, {data: action.payload}))
      return Object.assign({}, state, {data: action.payload});
    case GET_SINGLE_BLOG_POST_DATA: 
      return Object.assign({}, state, {singleBlogData: action.payload});
    case MOVE_SINGLE_TO_NEW_ENTRY: 
      state.newBlogEntry.blogTitle = state.singleBlogData.blogTitle
      state.newBlogEntry.blogAuthor = state.singleBlogData.blogAuthor
      state.newBlogEntry.location = state.singleBlogData.location
      state.newBlogEntry.bodyText = state.singleBlogData.bodyText
      state.newBlogEntry.categories = state.singleBlogData.categories
      state.newBlogEntry.images = state.singleBlogData.images
      return Object.assign({}, state);
    case HANDLE_BLOGFORM_CHANGE:
      state.newBlogEntry[action.name] = action.value
      console.log('reducer',state)
      return Object.assign({}, state);
    case ADD_CATEGORY_TO_NEW_BlOGPOST: 
      state.newBlogEntry.categories = action.name
      return Object.assign({}, state);
    default: 
      return state
  }
}