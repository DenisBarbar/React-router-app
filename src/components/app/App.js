import React, { Component } from 'react';

import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../header/";
import MainPage from "../main-page/";
import ContactPage from "../contact-page/";
import AboutPage from "../about-page/";
import ProfilePage from "../profile-page/"
import LoginPage from '../login-page/';
import Footer from "../footer/";

import UserService from "../../services/user-service/";

import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      isAuth: this.userService.isAuth(),
    };
  }

  login = (email, password) => {
    this.userService.login(email, password);
    this.setState({
      isAuth: this.userService.isAuth(),
    })
  }

  logout = () => {
    this.userService.logout();
    this.setState({
      isAuth: this.userService.isAuth(),
    })
  }

  AuthRoute(children) {
    const { isAuth } = this.state;

    return isAuth === true ? children : <Redirect to="/sign-in"/>;
  }
  
  UnauthRoute(children) {
    const { isAuth } = this.state;

    return isAuth === true ? <Redirect to="/"/> : children; 
  }

  Content() {
    const { isAuth } = this.state;

    return (
      <>
        <Header isAuth={isAuth} logoutClick={this.logout}/>
        <div className="content">
          <div className="pagecontent">
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>

              <Route path="/contacts">
                <ContactPage />
              </Route>

              <Route path="/profile">
                {this.AuthRoute(<ProfilePage />)}
              </Route>

              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  render(){ 
  return(
      <div>
          <Switch>
            <Route path="/sign-in">
              {this.UnauthRoute(<LoginPage loginClick={this.login}/>)}
            </Route>
            <Route path="/">
              {this.Content()}
            </Route>
          </Switch>
      </div>
    );
  }
}

