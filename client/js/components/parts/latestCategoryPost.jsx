import React from 'react'
import $ from 'jquery'

const LatestCategoryPost = React.createClass({
  componentDidMount(){
    console.log('hello')
    $.ajax({
      url: '/api/blogpost',
    })
    .done((data)=>{
      console.log('AJAX data', data);
      data.filter((element, index)=>{
        console.log('elelment', element)
        console.log('cat' , this.props.categories)
      })

    })
  },

  render(){
    return (
      <div>
        LatestCategoryPost
      </div>
    )
  }
})

export default LatestCategoryPost