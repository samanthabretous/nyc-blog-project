import {connect} from 'react-redux'
import UpdateBlog from '../components/blog/UpdateBlog'

const appToState = state => ({
  singleBlogData: state.blogReducer.singleBlogData,
  author: state.userFormReducer._id, 
  categories: state.blogReducer.categories
})

export default connect(appToState)(UpdateBlog)