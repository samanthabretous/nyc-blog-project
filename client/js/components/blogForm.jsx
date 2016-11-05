import React from 'react'
import $ from 'jquery'

import {newEntryFormStoreData, addCategoryToStore} from '../actions/blogActions'

const BlogForm = (props) => {
  let submitFormDataToDatabase = (event) => {
    event.preventDefault()
    let that = this;
    console.log( Array.isArray(props.categories))
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

  let handleFormChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    newEntryFormStoreData(name, value)
  }

  let handleCheckboxes = (event) => {
    let newCategory = event.target.value;
    let allCategories;

    //check to see if the category already in the state 
    if(props.categories.length > 0){
      if (props.categories.indexOf(newCategory) === -1){
        allCategories = props.categories.concat(newCategory)
      } else {
        console.log('same', props.categories)
        allCategories = props.categories.filter((category)=>{
          if (category !== newCategory) return category
        })
      }
    } else {
      allCategories = [newCategory]
    }

    //send the previous values and new added value to the store
    addCategoryToStore(allCategories)
  }
  
  let createCheckboxes = () => {
    return props.dropDownCategories.map((category, index) => ( 
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
      <form className='blogForm' onSubmit={submitFormDataToDatabase}>
        <div className='formInner'>

          <div className='inputContainer'>
            <label>Title</label>
            <input 
              type="text" 
              name='blogTitle'
              placeholder="Title"
              onChange={handleFormChange}
            />
          </div>

          <div className='author-location'>
            <div className='inputContainer'>
              <label>Author</label>
              <input 
                type="text"
                name='author' 
                placeholder="author"
                onChange={handleFormChange}
              />
            </div>

            <div className='inputContainer'>
              <label>Location</label>
              <input 
                type="text"
                name='location' 
                placeholder="Location"
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className='inputContainer'>
            <label>Enter Description</label>
            <textarea 
              type="textbox"
              name='bodyText' 
              placeholder="Description"
              onChange={handleFormChange}
              //style={{height: '200px'}}
            ></textarea>
          </div>
        <div className='inputContainer'>
          <label>Enter Description</label>
          <input 
            type="text"
            name='images' 
            placeholder="Enter Url of Image (seperate each entry with a comma)"
            onChange={handleFormChange}
          />
        </div>
        {createCheckboxes()}
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BlogForm