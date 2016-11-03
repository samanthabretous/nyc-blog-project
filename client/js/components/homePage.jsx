import React from 'react'

const HomePage = React.createClass({
  render(){
    return (<div>
      <div>Hello World</div>
      {this.props.children}
    </div>)
  }
})

export default HomePage