import AuthorForm from '../components/authorForm.jsx';

import {connect} from 'react-redux';

const mapStateToProps = state => {
return {
  firstName: state.authorFormReducer.firstName,
  lastName: state.authorFormReducer.lastName,
  email: state.authorFormReducer.email,
  location: state.authorFormReducer.location,
  bio: state.authorFormReducer.bio
}}



export const AuthorFormContainer = connect(mapStateToProps)(AuthorForm);