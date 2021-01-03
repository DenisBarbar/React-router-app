import React, { Component } from 'react';

import './LoginPage.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      dirty: false,
      valid: false,
    }
  }

  login = () => {
    const { loginClick } = this.props;


    const { email, password } = this.state;

    this.setState({
      dirty: true,
      valid: this.formIsValid(),
    })

    if (this.formIsValid() === false) {
      return;
    }

    loginClick(email, password);
  }

  setEmail = (e) => {
    this.setState({email: e.target.value});
  }

  setPassword = (e) => {
    this.setState({password: e.target.value});
  }

  formIsValid = () => {
    const { email, password } = this.state;

    if (email.length > 3 && password.length > 3) {
      return true;
    } else {
      return false;
    }

  }
  render(){
    const { valid, dirty } = this.state;

    const formError = valid === false && dirty === true ? <p className="error">Логин и пароль должны быть длиннее 4 символов!</p> : null;

    return (
      <div id="login-form">
        <h1>Вход на сайт</h1>
        <input id="email" type="email" placeholder="E-mail" onChange={this.setEmail}/>
        <input id="password" type="password" placeholder="Пароль" onChange={this.setPassword}/>
        {formError}
        <button onClick={this.login}>Войти</button>
      </div>
    );
  }
}