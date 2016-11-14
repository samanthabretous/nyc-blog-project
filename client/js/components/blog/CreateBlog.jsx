import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

import store from '../../store'
import Form from './form'
import {
  createBlogPostAsync
} from '../../actions/blogThunkActions'

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogTitle: this.props.blogTitle,
      blogAuthor: "",
      location: "", 
      bodyText: "", 
      categories: [],
      images: []
    };
    this.changeParentState = this.changeParentState.bind(this);
    this.submitNewBlogPost = this.submitNewBlogPost.bind(this);
  };

  submitNewBlogPost(event) {
    store.dispatch(createBlogPostAsync(this.state));
    //figure out a way to clear the form only once submitted
    //http://stackoverflow.com/questions/36197268/is-there-a-method-to-reset-a-react-component-using-es6-classes-to-its-initial-s
  };

  changeParentState(name, value){
    this.setState({[name]: value})
  }

  render(){
    return (
      <div>
        <h1>New Blog Post</h1>
        <form className='blogForm' action="/" onSubmit={this.submitNewBlogPost}>
          <Form 
            changeParentState={this.changeParentState}
            dropDownCategories={this.props.dropDownCategories}
            categories={this.state.categories}
            goToHome={true}
            blogInfo={this.state}
          />
          <button>Submit</button>
        </form> 
      </div>
    )
  }
}

CreateBlog.defaultProps = { blogTitle: "World" };

export default CreateBlog