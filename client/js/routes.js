import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './middleware/mainContainer'
import HomePageContainer from './middleware/homePageContainer'
import BlogPageContainer from './middleware/blogPageContainer'
import BlogFormContainer from './middleware/blogFormContainer'

export default (
  <Route path="/" component={MainContainer}>
    <IndexRoute component={HomePageContainer}/>
    <Route path='/blogpost:id' component={BlogPageContainer}/>
    <Route path='/blogform' component={BlogFormContainer}/>
  </Route> 
);