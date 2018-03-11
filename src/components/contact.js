import React from 'react'

const EMAILURL = 'http://localhost:3000/emails'

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
    this.sendEmail(this.state)
    .then(data => {
      this.setState({
        name: '',
        email: '',
        subject: '',
        body: '',
        message: data.message
      })
    })
  }

  sendEmail(state) {
    return fetch(EMAILURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        subject: state.subject,
        body: state.body
      })
    })
    .then(res => res.json())
  }


  render() {
    return (
      <div id="mainDetails">
        <h1>Reach out!</h1>
        <h2>{this.state.message !== '' ? this.state.message : null}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label><br/>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <label>Email</label><br/>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
          <label>Subject</label><br/>
          <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange}/><br/>
          <label>Body</label><br/>
          <textarea col="30" row="30" name="body" value={this.state.body} onChange={this.handleChange}/><br/>
          <input id="emailSubmit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Contact
