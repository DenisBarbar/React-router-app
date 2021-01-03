import React, { Component } from 'react';

import './ProfilePage.css';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: localStorage.getItem('login'),
      userPassword: localStorage.getItem('password'),
    }
  }

  render () {
    const { userEmail, userPassword } = this.state;

    return (
      <>
        <h1>Данные пользователя</h1>
        <p>Email: {userEmail}</p>
        <p>Password: {userPassword}</p>
      </>
    );
  }
}
