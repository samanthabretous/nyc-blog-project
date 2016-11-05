import CategoryPage from '../components/categoryPage'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
  categories: state.blogReducer.categories
})


export default connect(appToState)(CategoryPage)