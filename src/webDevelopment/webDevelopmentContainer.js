import React from 'react'
import WebDevMission from './webDevelopmentMission'
import WebDevDemos from './webDevelopmentDemos'

const webDevelopment = (props) => {
  return (
    <div id="#mainContainer">
      <WebDevMission />
      <WebDevDemos projects={props.projects}/>
    </div>
  )
}

export default webDevelopment
