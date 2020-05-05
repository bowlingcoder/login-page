import React from 'react';
import Content from './contentpage';
import Register from './registrationpage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[["",""]],
      email: "",
      password: "",
      login: false,
      attempt: false,
      register: false,
      registered: (props.newuser) ? false : true,
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

  handleSubmit(event){
    const length = this.state.users.length
    let i = 0
    while(i < length){
      const a = this.state.users.slice(0, length+1)[i]
      const b = [this.state.email,this.state.password]
      if (JSON.stringify(a) === JSON.stringify(b)) {this.setState({ login: true })}
      i +=1
    }
    if(!this.state.login){
      this.setState({ attempt: true })
    }
    event.preventDefault();
  }

  register(){
    this.setState({ register: true });
  }

  addUser(){
    this.setState({
      users: this.props.newuser.users,
      registered: true,
      });
  }

  render() {
    const error = (this.state.attempt) ? "Incorrect email and password" : " "
    if(this.state.register){
      return(<Register current={this.state}/>)
    }
    if(this.state.login) {
      return (<Content />);
    }
    else {
      return (
        <div className="page">
          <header className="login-header"><h1>Login User</h1></header>
          <Form className="base-form" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" onChange={this.handleChange}></Form.Control >
            </Form.Group>
            <Form.Text className="text-muted">
              {error}
            </Form.Text>
            <Button className="page-button" variant="outline-primary" type="submit" value="Submit">Login</Button>
          </Form>
          <div className="login-footer">
            <label>
              New Person: <Button className="page-button" variant="outline-primary" onClick={() => this.register()}>Register New person</Button> 
            </label>
          </div>
        </div>
      );
    }
  }

  componentDidMount(){
    if ((!this.state.registered)) {
      this.addUser();
    }
  }
}