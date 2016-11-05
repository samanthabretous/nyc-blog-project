import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import Display from '../display'


const DisplayBlogPost = (props) => {

  let deleteBlogPost = (postId) =>{
    $.ajax({
      url: "/api/blogpost", 
      type: 'DELETE', 
      data: {_id: postId}
    }) 
  }



  return (
    <div>
      <li>{props.blogPost.blogTitle}</li>
      <Display if={props.blogPost.blogAuthor === props.author}>

        <Link to='/' onClick={()=>{deleteBlogPost(props.blogPost._id)}}>Delete</Link>
      </Display>
    </div>
  )
}

export default DisplayBlogPost