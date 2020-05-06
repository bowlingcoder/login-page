import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

/* Attempt on having a singular component handle both forms 
   Current issue: Keeping the same state when switching between login and register causing info to bleed
*/
export default class BaseForm extends React.Component {
  constructor(props) {
    super(props);
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

  handlePassword(event){
    if (event.target.name === "password") {
      return (event.target.value)
    }
  }

  render() {
    const error = (this.props.attempts) ? "Incorrect email and password" : " "
    return (
      <div className="page">
        <Form className="base-form" onSubmit={() => this.props.onClick(this.state.email,this.state.password)}>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleChange}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange}></Form.Control >
          </Form.Group>

          <Form.Text className="text-muted">{error}</Form.Text>

          <Button className="page-button" variant="outline-primary" type="button" 
            onClick={() => this.props.onClick(this.state.email, this.state.password)}>Submit</Button>
        </Form>
      </div>
    );
  }
}