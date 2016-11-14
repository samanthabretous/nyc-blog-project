import React from 'react'
import {connect} from 'react-redux'
import CategoryPage from '../components/categoryPage'

const CategoryPageContainer = (props) => (
  props.data ?
  <CategoryPage whichCategory={props.params.category} data={props.data} categories={props.categories}/> : <h1>Loading...</h1>
)

const appToState = state => ({
  data: state.blogReducer.data,
  categories: state.blogReducer.categories
})


export default connect(appToState)(CategoryPageContainer)