import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import Form from './form'
import {
  newEntryFormStoreData, 
  addCategoryToStore
} from '../../actions/blogActions'

const BlogForm = (props) => {

  let submitNewBlogPostToDatabase = (event) => {
    $.ajax({
      url: '/api/blogpost',
      type: 'POST',
      data:{
        blogTitle: props.blogInfo.blogTitle,
        blogAuthor: props.blogInfo.blogAuthor,
        location: props.blogInfo.location, 
        bodyText: props.blogInfo.bodyText, 
        categories: props.blogInfo.categories,
        images: props.blogInfo.images
      }
    })
  };


  return (
    <div>
      <h1>New Blog Post</h1>
      <form className='blogForm' action='/' onSubmit={submitNewBlogPostToDatabase}>
        <Form 
          dropDownCategories={props.dropDownCategories}
          categories={props.blogInfo.categories}
          goToHome={true}
          blogInfo={props.blogInfo}
        />
        <button>Submit</button>
      </form> 
    </div>
  )
}

export default BlogForm