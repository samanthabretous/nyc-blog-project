import React from 'react'
import NavBar from './parts/navBar'

const Main = React.createClass({
  render(){
    return (
      <div>
        <NavBar />
        {this.props.children}
        <div>Footer</div>
      </div>
    )
  }
})

export default Main