import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import Form from './form'
import Display from '../parts/display'

const BlogPageUpdate = React.createClass({

  updateBlogPost(postId){
    $.ajax({
      url: "/api/blogpost", 
      type: 'PUT', 
      data: {
        id: postId,
        blogTitle: this.props.newBlogEntry.blogTitle,
        blogAuthor: this.props.newBlogEntry.blogAuthor,
        location: this.props.newBlogEntry.location,
        bodyText: this.props.newBlogEntry.bodyText,
        categories: this.props.newBlogEntry.categories,
        images: this.props.newBlogEntry.images 
      }
    }) 
  },
  render(){
    return (
      <div>
        <Display if={this.props.singleBlogData.blogAuthor === this.props.author}>
          <form className="blogForm"
            action={'/blogpost/' + this.props.params.id} 
            onSubmit={()=>{this.updateBlogPost(this.props.params.id)}}>
            <Form 
              dropDownCategories={this.props.categories}
              blogInfo={this.props.newBlogEntry}
              categories={this.props.singleBlogData.categories}
              updatingPost={true}
            />
            <button>Update</button>
          </form>
       </Display>
       <Display if={this.props.singleBlogData !== this.props.author}>
        <h1>You are not authorized to be on this page</h1>
       </Display>
      </div>
    )
  }
})

export default BlogPageUpdate