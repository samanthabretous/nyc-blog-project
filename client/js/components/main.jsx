import React from 'react'

const Main = React.createClass({
  render(){
    return (
      <div>
        <div>Nav Bar</div>
        {this.props.children}
        <div>Footer</div>
      </div>
    )
  }
})

export default Main