import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './middleware/mainContainer'
import HomePageContainer from './middleware/homePageContainer'
import BlogPageContainer from './middleware/blogPageContainer'
import BlogFormContainer from './middleware/blogFormContainer'
import CategoryPageContainer from './middleware/categoryPageContainer'
import AuthorFormContainer from './middleware/authorFormContainer.js'
import SignupContainer from './middleware/signupContainer.js'

import AuthorForm from './components/authorForm.jsx';

export default (
  <Route path="/" component={MainContainer}>
    <IndexRoute component={HomePageContainer}/>
    <Route path='/category/:category' component={CategoryPageContainer}/>
    <Route path='/blogpost/:id' component={BlogPageContainer}/>
    <Route path='/blogform' component={BlogFormContainer}/>
    <Route path='/signup' component={SignupContainer}/>
    <Route path='/authorform' component={AuthorFormContainer}/>
  </Route> 
);