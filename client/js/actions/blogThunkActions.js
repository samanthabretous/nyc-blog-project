import $ from 'jquery';
import {
  GET_ALL_BLOG_POSTS_DATA, 
  GET_SINGLE_BLOG_POST_DATA,
  GET_SINGLE_BLOG_POST_AUTHOR,
  CREATE_BLOG_POST,
  UPDATE_BLOG_POST,
  DELETE_BLOG_POST
} from './types'

//ALL BLOG POSTS------------------------------------
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

//GET SINGLE BLOG POST------------------------------------
export const getSingleBlogPost = blogposts => ({
  type: GET_SINGLE_BLOG_POST_DATA,
  payload: blogposts
})

export const getSingleBlogPostAuthor = author => ({
  type: GET_SINGLE_BLOG_POST_AUTHOR,
  payload: author
})

//get All blog post and send to store
export const getSingleBlogPostAsync = (postId) => (dispatch) => {
  $.ajax({
    url: `/api/blogpost/${postId}`,
    type: 'GET'
  })
  .done((blogpost) => {
    dispatch(getSingleBlogPost(blogpost))

    //get infomation about the author
    $.ajax({
      url: `/api/user/${blogpost.blogAuthor}`,
      type: 'GET'
    })
    .done((author) => {
      dispatch(getSingleBlogPostAuthor(author))
    })
  })
}

//CREATE BLOG POST------------------------------------
export const createBlogPost = newBlogPost => ({
  type: CREATE_BLOG_POST,
  payload: newBlogPost
})

export const createBlogPostAsync = newBlogPost => dispatch => {
  $.ajax({
    url: '/api/blogpost',
    type: 'POST',
    data: newBlogPost, 
  })
  .done(data => {
    dispatch(createBlogPost(data));
  })
}

//UPDATE BLOG POST------------------------------------
export const updateBlogPost = newBlogPost => ({
  type: UPDATE_BLOG_POST,
  payload: newBlogPost
})

export const updateBlogPostAsync = blogPost => dispatch => {
  $.ajax({
    url: '/api/blogpost',
    type: 'PUT',
    data: blogPost, 
  })
  .done(data => {
    dispatch(updateBlogPost(data));
  })
}

//DELETE BLOG POST------------------------------------
export const deleteBlogPost = postId => ({
  type: DELETE_BLOG_POST,
  payload: postId
})

export const deleteBlogPostAsync = (postId) => dispatch => {
  $.ajax({
    url: "/api/blogpost", 
    type: 'DELETE', 
    data: {_id: postId}
  })
  dispatch(deleteBlogPost(postId));
}
