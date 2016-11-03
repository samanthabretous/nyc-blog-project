import React from 'react'
import $ from 'jquery'

import {newEntryFormStoreData} from '../actions/index'

const BlogForm = (props) => {
  let submitFormDataToDatabase = (event) => {
    event.preventDefault()
    let that = this;
    let d = new Date()
    let date = (d.getMonth()+1) +" "+ d.getDay() +" "+ d.getFullYear()
    $.ajax({
      url: '/api/blogpost',
      type: 'POST',
      data:{
        blogTitle: props.blogTitle,
        // blogAuthor: props.blogAuthor,
        // date: date,
        // location: props.location, 
        // bodyText: props.bodyText, 
        // //categories: props.categories,
        // images: props.images
      } 
    })
    newEntryFormStoreData('blogTitle', '')
    newEntryFormStoreData('blogAuthor', '')
    newEntryFormStoreData('location', '')
    newEntryFormStoreData('bodyText', '')
    newEntryFormStoreData('images', '')
  };

  let handleFormChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    newEntryFormStoreData(name, value)
  }

  let handleCheckboxes = () => {

  }
  
  let createCheckboxes = () => {
    return props.categories.map((category, index) => ( 
      <div key={index}>
        <input 
          type='checkbox' 
          name='category'
          value={category}  
          onChange={handleCheckboxes}
        />
        {category}
      </div>
    ))
  }

  return (
    <form onSubmit={submitFormDataToDatabase}>
    <h1>PROPS{props.blogTitle}</h1>
      <input 
        type="text" 
        name='blogTitle'
        placeholder="Title"
        onChange={handleFormChange}
      />
      <input 
        type="text"
        name='author' 
        placeholder="author"
        onChange={handleFormChange}
      />
      <input 
        type="text"
        name='location' 
        placeholder="Location"
        onChange={handleFormChange}
      />
      <input 
        type="textbox"
        name='bodyText' 
        placeholder="Description"
        onChange={handleFormChange}
      />
      <input 
        type="text"
        name='images' 
        placeholder="Enter Url of Image (seperate each entry with a comma)"
        onChange={handleFormChange}
      />
      {createCheckboxes()}
      <button>Submit</button>
    </form>
  )
}

export default BlogForm