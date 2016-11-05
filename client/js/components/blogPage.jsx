import React from 'react'
import $ from 'jquery'

import DisplayBlogPost from './parts/blog/DisplayBlogPost'
import {updateBlogData} from '../actions/blogActions'

const BlogPage = React.createClass({

  //go to the database and fetch one entry that relates to the url
  componentDidMount() {
    $.ajax({
      url: `/api/blogpost/${this.props.params.id}`,
    })
    .done((data) => {
      updateBlogData(data)
    })
  },

  render(){
    return (
      <div>
        <DisplayBlogPost 
          blogPost={this.props.singleBlogData}
          author={this.props.author}
        />
      </div>
    )
  }
})

export default BlogPage
