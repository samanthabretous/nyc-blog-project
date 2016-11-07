import BlogForm from '../components/blog/blogForm'
import {connect} from 'react-redux'

const appToState = state => ({
  blogInfo : state.blogReducer.newBlogEntry,
  dropDownCategories: state.blogReducer.categories
})

export default connect(appToState)(BlogForm)