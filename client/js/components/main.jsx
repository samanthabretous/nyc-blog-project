import React from 'react'
import NavBar from './parts/navBar'

const Main = (props) => {
  return (
    <div>
      <NavBar categories={props.categories}/>
      {props.children}
      <div>Footer</div>
    </div>
  )
}

export default Main