import HomePage from '../components/homePage'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
  categories: state.blogReducer.categories
})


export default connect(appToState)(HomePage)