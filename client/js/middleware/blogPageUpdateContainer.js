import {connect} from 'react-redux'
import BlogPageUpdate from '../components/parts/blog/blogPageUpdate'

const appToState = state => ({
  data: state.blogReducer.data,
  singleBlogData: state.blogReducer.singleBlogData,
  author: state.authorFormReducer._id, 
  categories: state.blogReducer.categories
})

export default connect(appToState)(BlogPageUpdate)