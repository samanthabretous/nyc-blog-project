import React from 'react'
import $ from 'jquery'

const Blog = React.createClass({
  getInitialState(){
    return {data: ''}
  },
  componentDidMount(){
    let that = this;
    $.ajax({
      url: '/api/blogpost',
      success: (data) => {
        that.setState({data: data})
      }
    })
  },

  render(){

    let posts = this.state.data ? this.state.data.map((post, index)=> 
      <h1 key={index}>{post.title}</h1>
    ) : null
    return (
      <div>
        {posts}
      </div>
    )
  }
})

export default Blog