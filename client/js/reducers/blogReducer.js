import {
  UPDATE_DATA, 
  HANDLE_BLOGFORM_CHANGE, 
  ADD_CATEGORY_TO_NEW_BlOGPOST, 
  UPDATE_BLOG_DATA, 
  MOVE_SINGLE_TO_NEW_ENTRY
} from '../actions/types'

const INTIAL_STATE = {
  data:[],
  categories: {
    "Things To Do": ["Things to Do"], 
    "Food": ["I would not eat that"],
    "Subway": ["OH MY the Subway"], 
    "Hating":["What are Humans", "I just need to leave NYC"]
  }, 
  newBlogEntry: {
    blogTitle: '',
    blogAuthor: '',
    location: '', 
    bodyText: '', 
    categories: [],
    images: '',
  }, 
  singleBlogData: []
}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case UPDATE_DATA: 
      return Object.assign({}, state, {data: action.data});
    case MOVE_SINGLE_TO_NEW_ENTRY: 
      state.newBlogEntry.blogTitle = state.singleBlogData.blogTitle
      state.newBlogEntry.blogAuthor = state.singleBlogData.blogAuthor
      state.newBlogEntry.location = state.singleBlogData.location
      state.newBlogEntry.bodyText = state.singleBlogData.bodyText
      state.newBlogEntry.categories = state.singleBlogData.categories
      state.newBlogEntry.images = state.singleBlogData.images
      console.log('moving', state)
      return Object.assign({}, state);
    case HANDLE_BLOGFORM_CHANGE:
      state.newBlogEntry[action.name] = action.value
      console.log('reducer',state)
      return Object.assign({}, state);
    case ADD_CATEGORY_TO_NEW_BlOGPOST: 
      state.newBlogEntry.categories = action.name
      return Object.assign({}, state);
    case UPDATE_BLOG_DATA: 
      return Object.assign({}, state, {singleBlogData: action.data});
    default: 
      return state
  }
}