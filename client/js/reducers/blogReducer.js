import _ from 'lodash'
import {
  GET_ALL_BLOG_POSTS_DATA, 
  GET_SINGLE_BLOG_POST_DATA, 
  GET_SINGLE_BLOG_POST_AUTHOR,
  CREATE_BLOG_POST,
  DELETE_BLOG_POST
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
  singleBlogAuthor: []
}

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_BLOG_POSTS_DATA: 
      console.log(Object.assign({}, state, {data: action.payload}))
      return Object.assign({}, state, {data: action.payload});
    case GET_SINGLE_BLOG_POST_DATA: 
      return Object.assign({}, state, {singleBlogData: action.payload});
    case GET_SINGLE_BLOG_POST_AUTHOR:
      return Object.assign({}, state, {singleBlogAuthor: action.payload});
    case CREATE_BLOG_POST:
      return Object.assign({}, state, {data: [...state.data, action.payload]})
    case DELETE_BLOG_POST:
      let newData = _.remove(state.data, (blogpost) => blogpost._id !== action.payload);
      return Object.assign({}, state, {data: newData})
    default: 
      return state
  }
}