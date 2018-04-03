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
          <textarea col="50" row="50" name="body" value={this.state.body} onChange={this.handleChange}/><br/>
          <input id="emailSubmit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Contact
