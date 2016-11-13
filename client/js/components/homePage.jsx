import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import LatestCategoryPost from './parts/latestCategoryPost'

const HomePage = React.createClass({
  render(){

    //loop through all the blog post from the data received from the ajax call above and display
    let posts = this.props.data ? this.props.data.map((post, index)=> 
      <h1 key={index}>{post.blogTitle}</h1>
    ) : null
    return (
      <div>
        {posts}
        <LatestCategoryPost/>
      </div>
    )
  }
})

export default HomePage
