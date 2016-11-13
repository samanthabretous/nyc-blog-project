import {connect} from 'react-redux'
import BlogPage from '../components/blog/blogPage'

const appToState = state => ({
  data: state.blogReducer.data,
  singleBlogData: state.blogReducer.singleBlogData,
  author: state.userFormReducer._id
})

export default connect(appToState)(BlogPage)