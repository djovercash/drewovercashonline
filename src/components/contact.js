import React from 'react'

const EMAILURL = 'https://tranquil-dusk-11081.herokuapp.com/emails'
// const EMAILURL = "http://localhost:3000/emails"

class Contact extends React.Component{
  state = {
    name: '',
    email: '',
    subject: '',
    body: '',
    message: ''
  }

  componentDidMount() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      body: '',
      message: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name !== '' && this.state.email !== '' && this.state.subject !== '' && this.state.body !== ''){
      this.sendEmail(this.state)
      this.setState({
        name: '',
        email: '',
        subject: '',
        body: '',
        message: 'Thanks for the email! I will get back to you soon.'
      })
    } else {
      this.setState({
        message: 'Not all fields are filled out. Please fill out all fields'
      })
    }
  }

//UPDATEING IS HAVING A PROBLEM
  sendEmail(state) {
    return fetch(EMAILURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        subject: state.subject,
        body: state.body
      })
    })
  }


  render() {
    return (
      <div id="contactContainer">
        <div id="emailDetails">
          <h1>Reach out!</h1>
          <h2>{this.state.message !== '' ? this.state.message : null}</h2>
          <form onSubmit={this.handleSubmit}>
            <div id="topEmailDetails">
              <label>Name:  </label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
              <label>Email:  </label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
              <label>Subject:  </label>
              <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange}/><br/>
            </div><br/>
            <label>Body: </label><br/>
            <textarea rows="20" name="body" value={this.state.body} onChange={this.handleChange}/><br/>
            <input className="contactActionButton" type="submit" value="SUBMIT"/>
          </form>
        </div>
        <div id="contactDetails">
          <div>
            <h1>Download My Resume</h1>
            <a href="https://github.com/djovercash/Resume/raw/master/DOvercash_Resume.pdf" download>
              <button className="contactActionButton">DOWNLOAD</button>
            </a>
          </div>
          <div>
            <h1>Follow Me Online</h1>
            <div id="socialPlatformsContact">
              <h5><a href="https://www.linkedin.com/in/drewovercash/" target="_blank" rel="noopener noreferrer"><img className="logo" src="linkedin_logo.png" alt="LinkedIn" /></a></h5>
              <h5><a href="https://github.com/djovercash" target="_blank" rel="noopener noreferrer"><img className="logo" src="github_logo.png" alt="Github" /></a></h5>
              <h5><a href="https://www.facebook.com/DrewOvercashMusic" target="_blank" rel="noopener noreferrer"><img className="logo" src="facebook_logo.png" alt="Facebook" /></a></h5>
              <h5><a href="https://www.twitter.com/djovercash" target="_blank" rel="noopener noreferrer"><img className="logo" src="twitter_logo.png" alt="Twitter" /></a></h5>
              <h5><a href="https://www.instagram.com/djovercash" target="_blank" rel="noopener noreferrer"><img className="logo" src="instagram_logo.png" alt="Instgram" /></a></h5>
            </div>
          </div>
          <div>
            <h1>Awesome Charities I Care About</h1>
            <h3><a href="https://www.stjude.org/" target="_blank" rel="noopener noreferrer">St. Jude Childrens Research Hospital</a></h3>
            <h3><a href="https://broadwaycares.org/" target="_blank" rel="noopener noreferrer">Broadway Cares/Equity Fights Aids</a></h3>
            <h3><a href="https://www.aclu.org/" target="_blank" rel="noopener noreferrer">ACLU</a></h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
