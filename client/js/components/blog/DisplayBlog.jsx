import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import store from '../../store'
import deleteBlogPostAsync from '../../actions/blogThunkActions'
import Display from '../parts/display'


const DisplayBlog = (props) => {

  let listCategories = () =>{
    console.log(props)
    props.listCategories.map((category,index)=>
      <Link key={index} to=''><p>{category}</p></Link>
    )
  }

  let deleteBlogPost = (postId) => {
    store.dispatch(deleteBlogPostAsync(postId))
  }

  return (
    <section>
      <div className='listCategories'>
        {props.categories ? listCategories() : null}
      </div>
      <div className='blogHeader'>
        <h1>{props.blogPost.blogTitle}</h1>
        <div>
          <p>{props.blogAuthor ? props.blogAuthor.firstName : null} • {props.blogPost.date}</p>
          <p>{props.blogPost.location}</p>
        </div>
      </div>
      <div>
        <img src={props.blogPost.image} />
      </div>
      <div>
        <p>{props.blogPost.bodyText}</p>
      </div>
      <Display if={props.blogPost.blogAuthor === props.author}>
        <Link to={'/blogpost/' + props.whichPost + '/update'}>UPDATE</Link>
        <Link to='/' onClick={()=>(deleteBlogPost(props.blogPost._id))}>Delete</Link>
      </Display>
    </section>
  )
}

export default DisplayBlog