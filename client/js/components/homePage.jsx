import React from 'react'

import LatestCategoryPost from './parts/latestCategoryPost'

const HomePage = (props) => {

    //loop through all the blog post from the data received from the ajax call above and display
    let posts = props.data ? props.data.map((post, index)=> 
      <h1 key={index}>{post.blogTitle}</h1>
    ) : null

    return (
      <div>
        {posts}
        <LatestCategoryPost/>
      </div>
    )

}

export default HomePage
