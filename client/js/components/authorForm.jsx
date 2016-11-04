// ************************************ IMPORT NPM MODULES ************************************
import React from 'react';
import $ from 'jquery';

import newAuthorFormAction from '../actions/newAuthorAction.js';

const AuthorForm = (props) => {
  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let handleChange = (e) => {
    console.log(props)
    let name = e.target.name;
    let value = e.target.value;
    newAuthorFormAction(name, value);
  };

  return (
    <div>
      <h1>{props.firstName}</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
          <input type="text" name="email" placeholder="Email Address" onChange={handleChange}/>
          <input type="text" name="location" placeholder="Location" onChange={handleChange}/>
          <input type="text" name="bio" placeholder="Brief Bio" onChange={handleChange}/>
        </form>
    </div>
  )
}

export default AuthorForm;