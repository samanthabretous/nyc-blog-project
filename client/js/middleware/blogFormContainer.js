import BlogForm from '../components/blogForm'
import {connect} from 'react-redux'

const appToState = state => ({
  blogTitle: state.blogReducer.newBlogEntry.blogTitle,
  blogAuthor: state.blogReducer.newBlogEntry.blogAuthor,
  location: state.blogReducer.newBlogEntry.location, 
  bodyText: state.blogReducer.newBlogEntry.bodyText, 
  categories: state.blogReducer.newBlogEntry.categories,
  images: state.blogReducer.newBlogEntry.images,
  comments: state.blogReducer.newBlogEntry.comments,
  dropDownCategories: state.blogReducer.categories
})

export default connect(appToState)(BlogForm)