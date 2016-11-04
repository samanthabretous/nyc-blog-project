import Main from '../components/main'
import {connect} from 'react-redux'

const appToState = state => ({
  data: state.blogReducer.data,
})


export default connect(appToState)(Main)