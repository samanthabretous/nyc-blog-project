import React from 'react'
import {Link} from 'react-router'

import Display from '../parts/display'

import {
  newEntryFormStoreData, 
  addCategoryToStore, 
} from '../../actions/blogActions'

const Form = (props) => {

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
        allCategories = props.categories.filter((category)=>{
          if (category !== newCategory) return category
        })
      }
    } else {
      allCategories = [newCategory]
    }
    console.log(allCategories)
    //send the previous values and new added value to the store
    addCategoryToStore(allCategories)
    createCheckboxes()
  }
  
  let createCheckboxes = () => {

    //while in update form check if the category if already in the store data
    return props.dropDownCategories.map((category, index) => {
      let isChecked = props.blogInfo.categories.indexOf(category) > -1 ? true : false
      
      console.log('checkbox',isChecked, category)
      return ( 
        <div key={index}>
          <input 
            type='checkbox' 
            name='category'
            value={category}  
            onChange={handleCheckboxes}
            checked={isChecked}
          />
          {category}
        </div>
      )
    })
  }



  return (
    <div className='formInner'>
      <div className='inputContainer'>
        <label>Title</label>
        <input 
          type="text" 
          name='blogTitle'
          placeholder="Title"
          defaultValue={props.blogInfo.blogTitle}
          onChange={handleFormChange}
        />
      </div>

      <div className='author-location'>
        <div className='inputContainer'>
          <label>Author</label>
          <input 
            type="text"
            name='blogAuthor' 
            placeholder="author"
            defaultValue={props.blogInfo.blogAuthor}
            onChange={handleFormChange}
          />
        </div>

        <div className='inputContainer'>
          <label>Location</label>
          <input 
            type="text"
            name='location' 
            placeholder="Location"
            defaultValue={props.blogInfo.location}
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
          defaultValue={props.blogInfo.bodyText}
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
        defaultValue={props.blogInfo.images}
        onChange={handleFormChange}
      />
    </div>
    {props.blogInfo.categories ? createCheckboxes() : null}
  </div>
  )
}

export default Form
