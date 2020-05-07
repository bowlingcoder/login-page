import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    }
    else {
      this.setState({ password: event.target.value });
    }
  }

  render() {
    const error = (this.props.attempts) ? "Incorrect email and password" : " "
    return (
      <div className="page">
        <Form className="base-form">
          
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleChange}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange}></Form.Control >
          </Form.Group>

          <Form.Text className="text-muted">{error}</Form.Text>

          <Button className="page-button" variant="outline-primary" type="submit"
            onClick={() => this.props.onClick(this.state.email, this.state.password)}>Login</Button>

        </Form>
      </div>
    );
  }
}