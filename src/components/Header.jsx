import React from 'react'
import '../styles/Header.scss'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='header__title'>
      ATLASPORT - The atlas of all sports
      </div>
      <div>
        <ul className='header__navbar'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <li>Contact</li>
        </ul>
      </div>     
    </div>
  )
}

export default Header