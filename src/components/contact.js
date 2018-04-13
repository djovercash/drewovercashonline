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
            </div>
            <label>Body</label><br/>
            <textarea name="body" value={this.state.body} onChange={this.handleChange}/><br/>
            <input className="contactActionButton" type="submit" value="Submit"/>
          </form>
        </div>
        <div id="contactDetails">
          <h1>Download my resume</h1>
          <a href="https://github.com/djovercash/Resume/raw/master/DOvercash_Resume.pdf" download>
            <button className="contactActionButton">Download</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Contact
