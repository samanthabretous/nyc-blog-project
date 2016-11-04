import BlogPage from '../components/blogPage'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
})

export default connect(appToState)(BlogPage)