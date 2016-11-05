import React from 'react'
import $ from 'jquery'

import {updateStoreData} from '../actions/index'

const BlogPage = React.createClass({

  //go to the database and fetch one entry that relates to the url
  componentDidMount() {
    $.ajax({
      url: `/api/blogpost/${this.props.params.id}`,
    })
    .done((data) => {
      console.log('AJAX data', data);
      updateStoreData(data)
    })
  },


  deletePost(postId){
    $.ajax({
      url: "/api/blogpost", 
      type: 'DELETE', 
      data: {_id: postId}
    }) 
  },

  render(){
    let post = this.props.data;
    return (
      <div>
      <li>{post.blogTitle}</li>
      <button onClick={()=>{this.deletePost(post._id)}}>Delete</button>
      </div>
    )
  }
})

export default BlogPage