import BlogPage from '../components/blogPage'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
  singleBlogData: state.blogReducer.singleBlogData,
  author: state.authorFormReducer._id
})

export default connect(appToState)(BlogPage)