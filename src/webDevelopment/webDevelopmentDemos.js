import React from 'react'
import WebDevelopmentDemo from './webDevelopmentDemo'

const WebDevelopmentDemos = (props) => {
  return (
    <div>
      <h2>Checkout what Drew is currently working on!</h2>
      <div id="webDemos">
        {props.projects.map((project, index) => {
          return <WebDevelopmentDemo key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default WebDevelopmentDemos
