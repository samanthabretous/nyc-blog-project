import {connect} from 'react-redux'
import BlogPage from '../components/blog/blogPage'

const appToState = state => ({
  data: state.blogReducer.data,
  singleBlogData: state.blogReducer.singleBlogData,
  author: state.authorFormReducer._id
})

export default connect(appToState)(BlogPage)