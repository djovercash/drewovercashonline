import React from 'react'
import TheatreVideoListItem from './theatreVideoListItem'

const TheatreVideoList = (props) => {
  let videos = props.videos
  return (
    <div id="videoList">
      <h3>Video Clips</h3>
        <ul id="videoListItems">
          {videos.map(video => {
            return <TheatreVideoListItem key={video.id} video={video} selectVideo={props.selectVideo} />
          })}
        </ul>
    </div>
  )
}

export default TheatreVideoList
