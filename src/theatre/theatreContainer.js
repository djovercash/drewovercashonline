import React from 'react'
import TheatreBio from './theatreBio'
import TheatreVideoList from './theatreVideoList'
import TheatreSelectedVideo from './theatreSelectedVideoClip'

class Theatre extends React.Component {
  state = {
    selectedVideo: null
  }

  selectVideo = (e) => {
    let id = parseInt((e.target.id), 10)
    let video = this.props.videos.find(video => video.id === id)
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div id="theatreContainer">
        <TheatreBio />
        <div id="videos">
          <TheatreVideoList videos={this.props.videos} selectVideo={this.selectVideo}/>
          <TheatreSelectedVideo video={this.state.selectedVideo}/>
        </div>
      </div>
    )
  }
}

export default Theatre
