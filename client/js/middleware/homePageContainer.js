import React from 'react'
import {connect} from 'react-redux'
import HomePage from '../components/homePage'

const HomePageContainer = (props) => (
  props.data ?
  <HomePage data={props.data} categories={props.categories}/> : <h1>Loading...</h1>
)

const appToState = state => {
  return{
  data: state.blogReducer.data,
  categories: state.blogReducer.categories
}}


export default connect(appToState)(HomePageContainer)