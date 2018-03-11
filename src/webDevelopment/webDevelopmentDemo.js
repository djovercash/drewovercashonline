import React from 'react'
import ReactPlayer from 'react-player'

const WebDevelopmentDemo = (props) => {
  return (
    <div id="webDemo">
      <ReactPlayer
         className='react-player'
         url={props.project.video_url}
         controls
         width='100%'
         height='100%'
       />
       <h2>{props.project.title} | <a href={props.project.github_link} target="_blank"><img className="logo" src='github_logo.png' alt="github_logo"/></a></h2>
       <p>{props.project.description}</p>
    </div>
  )
}

export default WebDevelopmentDemo
