import React from 'react'
import {Link} from 'react-dom'
import $ from 'jquery'

import {updateStoreData} from '../actions/blogActions'

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
      <Link to='/' onClick={()=>{this.deletePost(post._id)}}>Delete</Link>
      </div>
    )
  }
})

export default BlogPage