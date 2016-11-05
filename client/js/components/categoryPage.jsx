import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import {updateStoreData} from '../actions/index'
import LatestCategoryPost from './parts/latestCategoryPost'

const CategoryPage = React.createClass({

  //retrive ALL data from the database to display all blog post
  componentDidMount(){
    $.ajax({
      url: '/api/blogpost/',
      success: (data) => {
        console.log(data)
        updateStoreData(data)
      }
    })
  },

  render(){

    //loop through all the blog post from the data received from the ajax call above and display
    let posts = this.props.data ? this.props.data.map((post, index)=> 
      <Link to={'/blogpost/' + post._id} key={index}>{post.blogTitle}</Link>
    ) : null
    return (
      <div>
        {posts}
      </div>
    )
  }
})

export default CategoryPage

      // <Link to={`/blogpost/${post._id}`} key={index}><h1>{post.blogTitle}</h1></Link>