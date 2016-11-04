import HomePage from '../components/homePage'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.data,
  categories: state.categories
})


export default connect(appToState)(HomePage)