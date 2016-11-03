import BlogForm from '../components/blogForm'
import {connect} from 'react-redux'

const appToState = state => {
  console.log(state)
  return{
  blogTitle: state.newBlogEntry.blogTitle,
  blogAuthor: state.newBlogEntry.blogAuthor,
  location: state.newBlogEntry.location, 
  bodyText: state.newBlogEntry.bodyText, 
  categories: state.newBlogEntry.categories,
  images: state.newBlogEntry.images,
  comments: state.newBlogEntry.comments,
  categories: state.categories
}}

export default connect(appToState)(BlogForm)