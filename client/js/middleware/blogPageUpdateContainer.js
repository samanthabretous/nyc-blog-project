import {connect} from 'react-redux'
import BlogPageUpdate from '../components/blog/blogPageUpdate'

const appToState = state => ({
  singleBlogData: state.blogReducer.singleBlogData,
  newBlogEntry: state.blogReducer.newBlogEntry,
  author: state.authorFormReducer._id, 
  categories: state.blogReducer.categories
})

export default connect(appToState)(BlogPageUpdate)