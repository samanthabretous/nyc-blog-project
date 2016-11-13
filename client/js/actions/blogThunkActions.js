import $ from 'jquery';
import {
  GET_ALL_BLOG_POSTS_DATA, 
} from './types'

//send all blogs to the store
export const getAllBlogPostsData = blogposts => ({
  type: GET_ALL_BLOG_POSTS_DATA,
  payload: blogposts
})

//get All blog post and send to store
export const getBlogPostsAsync = () => (dispatch) => {
  $.ajax({
      url: '/api/blogpost/',
      type: 'GET'
    })
    .done((blogposts) => {
      dispatch(getAllBlogPostsData(blogposts))
    })
}