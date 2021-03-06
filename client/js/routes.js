import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './middleware/mainContainer'
import HomePageContainer from './middleware/homePageContainer'
import BlogPageContainer from './middleware/blogPageContainer'
import BlogPageUpdateContainer from './middleware/blogPageUpdateContainer'
import BlogFormContainer from './middleware/blogFormContainer'
import CategoryPageContainer from './middleware/categoryPageContainer'
import UserFormContainer from './middleware/userFormContainer'
import SignupContainer from './middleware/signupContainer'


export default (
  <Route path="/" component={MainContainer}>
    <IndexRoute component={HomePageContainer}/>
    <Route path='/category/:category' component={CategoryPageContainer}/>
    <Route path='/blogpost/:id' component={BlogPageContainer}/>
    <Route path='/blogpost/:id/update' component={BlogPageUpdateContainer}/>
    <Route path='/blogform' component={BlogFormContainer}/>
    <Route path='/signup' component={SignupContainer}/>
    <Route path='/userform' component={UserFormContainer}/>
  </Route> 
);