import React from 'react'
let logoImage = require("../../../images/nycweird.png")

const NavBar = () => {
  let navLinks = () => {
    let navLinks =['Things to Do', 'Food', 'Subway', "Hating"]
    return navLinks.map((link, index) =>
      <li key={index}>{link.toUpperCase()}</li>
    ) 
  }

  return (
    <nav>
      <div className='main'>
        <div className="navLeft">
          <div className="logo">
            <img src={logoImage}/>
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