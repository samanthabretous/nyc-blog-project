import Main from '../components/main'
import {connect} from 'react-redux'

const appToState = state => ({
  categories: state.blogReducer.categories
})


export default connect(appToState)(Main)