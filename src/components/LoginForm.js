import React from "react";
const axios = require('axios');
const authService = require('../services/authService')

class LoginForm extends React.Component {

  constructor () {
    super();
    this.state = { 
        email: '',
        password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  
  handleChange (event) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value }); //geht dann auf formular name
  }

  handleSubmit(event) {
    
    let user = {
        email : this.state.email,
        password : this.state.password
    }
    
    authService.login(user)

    this.props.history.push("/"); // zurueck zu home
    event.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit ={this.handleSubmit}>
      
        <label>Email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        
        <label>Password</label>
        <input type="password" name="password" onChange={this.handleChange} />
        <input type="submit" onSubmit={this.handleSubmit} ></input>
        <p>{sessionStorage.getItem('access_token')}</p>
      </form>
    );
  }
}


export default LoginForm;
