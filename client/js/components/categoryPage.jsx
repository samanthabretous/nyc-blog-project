import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import {updateStoreData} from '../actions/blogActions'
import LatestCategoryPost from './parts/latestCategoryPost'
import Card from './parts/card'


const CategoryPage = React.createClass({

  //retrive ALL data from the database to display all blog post
  componentDidMount(){
    $.ajax({
      url: '/api/blogpost/',
      success: (data) => {
        updateStoreData(data)
      }
    })
  },
  isIncluded(array){

    //check to see if the post has the same categories as the params
    let answer = array.map((description)=>{
      let categories = this.props.categories[this.props.params.category]
      return categories.includes(description)
    })
    return answer.includes(true)
  },

  render(){
    
    //loop through all the blog post from the data received from the ajax call above and display
    let posts = this.props.data ? this.props.data.map((post, index)=> {
      if(this.isIncluded(post.categories)){
        return (
          <Card 
            key={index}
            postId={post._id} 
            blogTitle={post.blogTitle} 
            bodyText={post.bodyText}
          />
        )
      }
    }) : null
    return (
      <div>
        <section className="listOfCards">
          {posts}
        </section>
      </div>
    )
  }
})

export default CategoryPage

      // <Link to={`/blogpost/${post._id}`} key={index}><h1>{post.blogTitle}</h1></Link>