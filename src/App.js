import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './components/home'
import WebDevelopment from './webDevelopment/webDevelopmentContainer'
import Theatre from './theatre/theatreContainer'
import Footer from './components/footer'
import Contact from './components/contact'
import './App.css';

const SONGURL = "http://localhost:3000/songs"
const PROJECTURL = "http://localhost:3000/projects"

class App extends Component {

  state = {
    videos: [],
    projects: []
  }

  componentDidMount() {
    this.fetchSongs()
    .then(data => {
      this.setState({
        videos: data
      })
    })
    this.fetchProjects()
    .then(data => {
      this.setState({
        projects: data
      })
    })

  }

  fetchSongs() {
    return fetch(SONGURL)
    .then(res => res.json())
  }

  fetchProjects() {
    return fetch(PROJECTURL)
    .then(res => res.json())
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/home" render={(routerParams) => {
            return <Home/>
          }}/>
          <Route path="/web_development" render={(routerParams) => {
            return <WebDevelopment projects={this.state.projects}/>
          }}/>
          <Route path="/musical_theatre" render={(routerParams) => {
              return <Theatre videos={this.state.videos}/>
            }}/>
          <Route path="/contact" render={(routerParams) => {
            return <Contact/>
          }}/>
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
