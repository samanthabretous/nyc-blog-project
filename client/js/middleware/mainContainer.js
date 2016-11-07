import Main from '../components/main'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
  categories: state.blogReducer.categories
})


export default connect(appToState)(Main)