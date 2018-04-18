import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbarLogo">
        <h1><NavLink to='/home' exact>DO</NavLink></h1>
      </div>
      <div id="navbarNavigationDesktop">
        <NavLink to='/web_development' exact>DO Web Development</NavLink>
        <NavLink to='/musical_theatre' exact>DO Musical Theatre</NavLink>
        <NavLink to='/contact' exact>DO Contact</NavLink>
      </div>
      <div id="navbarNavigationMobile">
        <NavLink to='/home' exact><h1>DO</h1></NavLink>
        <NavLink to="/web_development" exact><img className="mobileNavbarIcon" src="WebMobile.png" alt="Web Development" /></NavLink>
        <NavLink to="/musical_theatre" exact><img className="mobileNavbarIcon" src="MusicMobile.png" alt="Musical Theatre" /></NavLink>
        <NavLink to="/contact" exact><img className="mobileNavbarIcon" src="ContactMobile.png" alt="Contact" /></NavLink>
      </div>
    </div>
  )
}

export default Navbar
