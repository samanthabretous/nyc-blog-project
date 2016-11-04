import React from 'react'
import $ from 'jquery'

import {updateStoreData} from '../actions/index'

const BlogPage = React.createClass({

  //go to the database and fetch one entry that relates to the url
  componentDidMount() {
    $.ajax({
      url: `/api/blogpost/${this.props.params.id}`,
    })
    .done((data) => {
      console.log('AJAX data', data);
      updateStoreData(data)
    })
  },

  render(){
    let posts = this.props.data
    return (
      <div>
        {posts}
      </div>
    )
  }
})

export default BlogPage