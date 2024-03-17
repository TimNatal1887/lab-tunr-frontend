import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
        <Link className='song-link' to="/songs">
            <h1 className='nav-header'>Songs</h1>
        </Link>
    </div>
  )
}

export default Navbar