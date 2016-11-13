import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import MainContainer from './middleware/mainContainer'
import HomePageContainer from './middleware/homePageContainer'
import BlogPageContainer from './middleware/blogPageContainer'
import BlogPageUpdateContainer from './middleware/blogPageUpdateContainer'
import BlogFormContainer from './middleware/blogFormContainer'
import CategoryPageContainer from './middleware/categoryPageContainer'
import UserFormContainer from './middleware/userFormContainer'
import SignupContainer from './middleware/signupContainer'
import NotFound from './components/notFound'

//Redux
import store from './store'
import {getBlogPostsAsync, getSingleBlogPostAsync} from './actions/blogThunkActions.js';

// const getBlogPost = (nextState) => {store.dispatch(getSingleBlogPostAsync(nextState.params.id))}
const getAllBlogPosts = () => {store.dispatch(getBlogPostsAsync())}


export default (
  <Route>
  <Route path="/" component={MainContainer}>
    <IndexRoute component={HomePageContainer} onEnter={getAllBlogPosts}/>
    {/*<Route path='/blogpost/:id' component={BlogPageContainer} />
    <Route path='/category/:category' component={CategoryPageContainer} />
    <Route path='/blogpost/:id/update' component={BlogPageUpdateContainer}/>
    <Route path='/create-blog' component={BlogFormContainer}/>
    <Route path='/signup' component={SignupContainer}/>
    <Route path='/userform' component={UserFormContainer}/>*/}

  </Route> 
  <Route path="*" component={NotFound} />
  </Route>
);

//onEnter={component}
