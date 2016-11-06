import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import Form from './parts/blog/form'
import {
  newEntryFormStoreData, 
  addCategoryToStore
} from '../actions/blogActions'

const BlogForm = (props) => {
  let submitNewBlogPostToDatabase = (event) => {
    $.ajax({
      url: '/api/blogpost',
      type: 'POST',
      data:{
        blogTitle: props.blogTitle,
        blogAuthor: props.blogAuthor,
        location: props.location, 
        bodyText: props.bodyText, 
        categories: props.categories,
        images: props.images
      }
    })
    newEntryFormStoreData('blogTitle', '')
    newEntryFormStoreData('blogAuthor', '')
    newEntryFormStoreData('location', '')
    newEntryFormStoreData('bodyText', '')
    newEntryFormStoreData('images', '')
  };


  return (
    <div>
      <h1>New Blog Post</h1>
      <form className='blogForm' action='/' onSubmit={submitNewBlogPostToDatabase}>
        <Form 
          dropDownCategories={props.dropDownCategories}
          categories={props.categories}
          goToHome={true}
          blogTitle={props.blogTitle}
          blogAuthor={props.blogAuthor}
          location={props.location}
          bodyText={props.bodyText}
          categories={props.categories}
          images={props.images}
        />
        <button>Submit</button>
      </form> 
    </div>
  )
}

export default BlogForm