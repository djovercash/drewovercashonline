import React from 'react'
import ReactPlayer from 'react-player'

const TheatreSelectedVideo = (props) => {
  return (
    <div id="TheatreSelectedVideo">
      {props.video !== null ?
        <div id="selectedVideo">
          <ReactPlayer
             className='react-player'
             url={props.video.video_url}
             controls
             width='100%'
             height='100%'
           />
           <h3>{props.video.title.split('(')[0]}</h3>
           <h4>Performed by: {props.video.singer}</h4>
           <h4>{props.video.venue}</h4>
           <h4>{props.video.date}</h4>
        </div>
      :
        <div id="nonSelectedVideo">
          <h3>Select a video to see a clip</h3>
        </div>
      }
    </div>
  )
}

export default TheatreSelectedVideo
