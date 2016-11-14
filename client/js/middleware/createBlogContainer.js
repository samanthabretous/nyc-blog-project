import CreateBlog from '../components/blog/CreateBlog'
import {connect} from 'react-redux'

const appToState = state => ({
  dropDownCategories: state.blogReducer.categories
})

export default connect(appToState)(CreateBlog)