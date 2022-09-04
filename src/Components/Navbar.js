import React from 'react'
import {Link} from "react-router-dom"
import "../CSS/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>    
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/requests">Requests</Link>
            <Link to="/login">Login/Register</Link>
            
    </div>
  )
}

export default Navbar