import React from 'react'

const TheatreVideoListItem = (props) => {
  return (
    <li id={props.video.id} onClick={props.selectVideo}>{props.video.title}</li>
  )
}

export default TheatreVideoListItem
