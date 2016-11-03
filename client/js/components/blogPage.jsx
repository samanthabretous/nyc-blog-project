import React from 'react'
import $ from 'jquery'

import {updateStoreData} from '../actions/index'

const BlogPage = React.createClass({
  componentDidMount(){
    let that = this;
    $.ajax({
      url: '/api/blogpost',
      success: (data) => {
        updateStoreData(data)
      }
    })
  },

  render(){
    let posts = this.props.data ? this.props.data.map((post, index)=> 
      <h1 key={index}>{post.blogTitle}</h1>
    ) : null
    return (
      <div>
        {posts}
      </div>
    )
  }
})

export default BlogPage