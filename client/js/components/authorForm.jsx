// ************************************ IMPORT NPM MODULES ************************************
import React from 'react';
import $ from 'jquery';

import newAuthorFormAction from '../actions/newAuthorAction.js';

const AuthorForm = (props) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: '/api/authors',
      type: 'POST',
      data: {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        location: props.location
      }
    })
  };

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    newAuthorFormAction(name, value);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
          <input type="text" name="email" placeholder="Email Address" onChange={handleChange}/>
          <input type="text" name="location" placeholder="Location" onChange={handleChange}/>
          <input type="text" name="bio" placeholder="Brief Bio" onChange={handleChange}/>
          <input type="submit" name="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default AuthorForm;