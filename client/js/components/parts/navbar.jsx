import React from 'react'
import {Link} from 'react-router'
let logoImage = require("../../../images/nycweird.png")

const NavBar = () => {
  let navLinks = () => {
    let navLinks =['Things to Do', 'Food', 'Subway', "Hating"]
    return navLinks.map((link, index) =>
      <Link key={index} to={'/category/'+link}><li>{link.toUpperCase()}</li></Link>
    ) 
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
        <div className='searchInput'>
          <input type='text' placeholder='SEARCH' name='search'/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar