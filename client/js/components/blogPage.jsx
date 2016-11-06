import React from 'react'
import $ from 'jquery'

import DisplayBlogPost from './parts/blog/DisplayBlogPost'
import {updateBlogData} from '../actions/blogActions'

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
      console.log(data)

      //get infomation about the author
      $.ajax({
        url: `/api/authors/${data.blogAuthor}`
      })
      .done((authorData) => {
        console.log(authorData)
        this.setState({blogAuthor:authorData.firstName + " " + authorData.lastName})
      })
    })
  },

  render(){
    console.log(this.state.blogAuthor)
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
