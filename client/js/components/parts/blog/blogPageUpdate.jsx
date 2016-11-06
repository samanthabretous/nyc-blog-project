import React from 'react'
import {Link} from 'react-router'

import Form from './form'
import Display from '../display'

const BlogPageUpdate = React.createClass({

  updateBlogPost(postId){
    $.ajax({
      url: "/api/blogpost", 
      type: 'PUT', 
      data: {_id: postId}
    }) 
  },
  render(){
    console.log(this.props)
    return (
      <div>
        <Display if={this.props.singleBlogData.blogAuthor === this.props.author}>
          <form>
            <Form 
              dropDownCategories={this.props.categories}
              fillForm={this.props.singleBlogData}
            />
            <Link 
              to={'/blogpost/' + this.props.params.id} 
              onClick={()=>{this.updateBlogPost(this.props.blogPost._id)}}>
            Update</Link>
          </form>
        </Display>
      </div>
    )
  }
})

export default BlogPageUpdate