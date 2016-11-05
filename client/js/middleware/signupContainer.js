import Signup from '../components/signup'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
})


export default connect(appToState)(Signup)