import React from 'react';
import Login from './loginpage'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.current.users,
      email: "",
      password: "",
      registered: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    }
    else {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    const users = this.state.users
    this.setState({ 
      users: users.concat([[this.state.email, this.state.password]]),
      registered: true 
    })
    event.preventDefault();
  }

  render() {
    if (this.state.registered) {
      return (<Login newuser={this.state} />)
    }
    return (
      <div className="page">
        <header className="login-header">
          <h1>Register User</h1>
        </header>
        <Form className="base-form" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleChange}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange}></Form.Control >
          </Form.Group>
          <Button className="page-button" variant="outline-primary" type="submit" value="Submit">Register</Button>
        </Form>
        <div className="login-footer"></div>
      </div>
    );
  }
}