import React from 'react'
import { Link } from 'react-router-dom'
const logo = require("../assets/logo.png")
const Navbar = () => {
  
  return (
    <div className='navcontainer'>
      <nav>
        <ul>
          <img src={logo} alt="" style={{maxWidth:"10rem",margin:" 10px 0", borderRadius:"50rem"}} />
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/team">TEAM</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
