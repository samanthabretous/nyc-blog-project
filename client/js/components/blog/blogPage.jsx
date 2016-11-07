import React from 'react'
import $ from 'jquery'

import DisplayBlogPost from './DisplayBlogPost'
import {
  updateBlogData, 
  moveSingleBlogDataToNewEntryBlogData
} from '../../actions/blogActions'

const BlogPage = React.createClass({

  getInitialState(){
    return {blogAuthor: null}
  },

  //go to the database and fetch one entry that relates to the url
  componentDidMount() {
    this.setState({blogAuthor:null})
    $.ajax({
      url: `/api/blogpost/${this.props.params.id}`,
    })
    .done((data) => {
      updateBlogData(data)

      //get infomation about the author
      $.ajax({
        url: `/api/authors/${data.blogAuthor}`
      })
      .done((authorData) => {
        this.setState({blogAuthor:authorData.firstName + " " + authorData.lastName})
        
        //move data so it can be used in the update form
        moveSingleBlogDataToNewEntryBlogData()
      })
    })
  },

  render(){
    return (
      <div>
        <DisplayBlogPost 
          blogPost={this.props.singleBlogData}
          blogAuthor={this.state.blogAuthor}
          author={this.props.author}
          whichPost={this.props.params.id}
        />
      </div>
    )
  }
})

export default BlogPage
