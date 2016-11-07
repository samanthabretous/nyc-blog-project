import UserForm from '../components/userForm';

import {connect} from 'react-redux';

const mapStateToProps = state => {
return {
  firstName: state.userFormReducer.firstName,
  lastName: state.userFormReducer.lastName,
  email: state.userFormReducer.email,
  location: state.userFormReducer.location,
  bio: state.userFormReducer.bio
}}



export default connect(mapStateToProps)(UserForm);