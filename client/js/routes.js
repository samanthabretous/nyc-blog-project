import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import MainContainer from './middleware/mainContainer'
import HomePageContainer from './middleware/homePageContainer'
import DisplayBlogContainer from './middleware/displayBlogContainer'
import UpdateBlogContainer from './middleware/updateBlogContainer'
import CreateBlogContainer from './middleware/createBlogContainer'
import CategoryPageContainer from './middleware/categoryPageContainer'
import UserFormContainer from './middleware/userFormContainer'
import SignupContainer from './middleware/signupContainer'
import NotFound from './components/notFound'

//Redux
import store from './store'
import {getBlogPostsAsync, getSingleBlogPostAsync} from './actions/blogThunkActions.js';

const getBlogPost = (nextState) => {store.dispatch(getSingleBlogPostAsync(nextState.params.id))}
const getAllBlogPosts = () => {store.dispatch(getBlogPostsAsync())}



export default (
  <Route>
  <Route path="/" component={MainContainer}>
    <IndexRoute component={HomePageContainer} onEnter={getAllBlogPosts}/>
    <Route path='/category/:category' component={CategoryPageContainer} onEnter={getAllBlogPosts}/>
    <Route path='/blogpost/:id' component={DisplayBlogContainer} onEnter={getBlogPost}/>
    <Route path='/blogpost/:id/update' component={UpdateBlogContainer} onEnter={getBlogPost}/>
    <Route path='/create-blog' component={CreateBlogContainer}/>
    <Route path='/signup' component={SignupContainer}/>
    <Route path='/userform' component={UserFormContainer}/>

  </Route> 
  <Route path="*" component={NotFound} />
  </Route>
);

//onEnter={component}
