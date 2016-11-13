import React from 'react'
import {Link} from 'react-router'

import {newEntryFormStoreData} from '../../actions/blogActions'
let logoImage = require("../../../images/nycweird.png")

const NavBar = (props) => {
  let navLinks = () => {
    let navLinks = Object.keys(props.categories)
    return navLinks.map((link, index) =>
      <Link key={index} to={'/category/'+link}><li>{link.toUpperCase()}</li></Link>
    ) 
  }

  let clearNewBlogEntry = () => {
    newEntryFormStoreData('blogTitle', '')
    newEntryFormStoreData('blogAuthor', '')
    newEntryFormStoreData('location', '')
    newEntryFormStoreData('bodyText', '')
    newEntryFormStoreData('images', '')
  }

  return (
    <nav>
      <div className='main'>
        <div className="navLeft">
          <div className="logo">
            <Link to='/'><img src={logoImage}/></Link>
          </div>
          <ul className='navLinks'>
            {navLinks()}
          </ul>
        </div>
        <div className="userSignin">
          <Link to='/blogform' onClick={clearNewBlogEntry}><li>New Post</li></Link>
          <Link to='/signup'><li>SIGN IN</li></Link>
        </div>
        <div className='searchInput'>
          <input type='text' placeholder='SEARCH' name='search'/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar