import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <h1>DO MORE</h1>
      <h3>with Drew Overcash</h3>
      <div id="homeDesktopButtons">
        <NavLink to='/web_development' exact>DO Web Development</NavLink>
        <NavLink to='/musical_theatre' exact>DO Musical Theatre</NavLink>
      </div>
      <div id="homeMobileButtons">
        <NavLink to='/web_development' exact>DO Web Development</NavLink><br />
        <NavLink to='/musical_theatre' exact>DO Musical Theatre</NavLink>
      </div>
    </div>

  )
}

export default Home
