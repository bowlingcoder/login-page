import React from 'react';
import './App.css';
import Login from './components/loginpage';
import Content from './components/contentpage';
import Button from 'react-bootstrap/Button';
import Register from './components/registrationpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [["", ""]],
      login: false,
      attempt: false,
      register: false,
    }
  }

  register() {
    this.setState({ register: true });
  }

  handleLogin(email, password) {
    const length = this.state.users.length
    let i = 0
    while (i < length) {
      const a = this.state.users.slice(0, length + 1)[i]
      const b = [email, password]
      if (JSON.stringify(a) === JSON.stringify(b)) { this.setState({ login: true }) }
      i += 1
    }
    if (!this.state.login) {
      this.setState({ attempt: true })
    }
  }

  handleRegister(email, password) {
    const users = this.state.users
    this.setState({
      users: users.concat([[email, password]]),
      attempt: false,
      register: false,
    })
  }

  render() {
    if (this.state.login) {
      return (
        <div className="App">
           <Content />
        </div>
      );
    }

    if(this.state.register){
      return (
        <div className="App">
          <header className="login-header"><h1>Register User</h1></header>
          <Register onClick={(email, password)=> this.handleRegister(email, password)} />
          <div className="login-footer"></div>
        </div>
      );
    }

    return (    
      <div className="App">
        <header className="login-header"><h1>Login User</h1></header>
        <Login attempts={this.state.attempt} onClick={(email, password) => this.handleLogin(email, password)} />
        <div className="login-footer">
          <label>
            New Person: <Button className="page-button" variant="outline-primary" onClick={() => this.register()}>Register New person</Button>
          </label>
        </div>
      </div>
    );
  }
}

export default App;
