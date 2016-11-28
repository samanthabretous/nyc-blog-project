import React from 'react'
import {connect} from 'react-redux'
import DisplayBlog from '../components/blog/DisplayBlog'

const BlogPageContainer = (props) => (
  props.singleBlogData ?
    <div>
      <DisplayBlog 
        blogPost={props.singleBlogData}
        blogAuthor={props.singleBlogData.blogAuthor}
        author={props.author}
        whichPost={props.params.id}
      />
    </div> :
    <h1>Loading</h1>
)

const appToState = state => ({
  data: state.blogReducer.data,
  singleBlogData: state.blogReducer.singleBlogData,
  author: state.userFormReducer._id
})

export default connect(appToState)(BlogPageContainer)