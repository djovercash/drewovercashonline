import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbarLogo">
        <h1><NavLink to='/home' exact>DO</NavLink></h1>
      </div>
      <div id="navbarNavigation">
        <NavLink to='/web_development' exact>DO Web Development</NavLink>
        <NavLink to='/musical_theatre' exact>DO Musical Theatre</NavLink>
        <NavLink to='/contact' exact>DO Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
