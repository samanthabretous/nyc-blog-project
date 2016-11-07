import React from 'react'
import {Link} from 'react-router'

const Card = (props) => {
  return (
    <Link to={'/blogpost/' + props.postId} className='blogCard'>
      <article>
        <h3>{props.blogTitle}</h3>
        <p>{props.bodyText}</p>
      </article>
    </Link>
  )
}

export default Card