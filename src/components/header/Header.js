import React from 'react';

import { Link, NavLink, Redirect } from 'react-router-dom';

import './Header.css';

function Header({ isAuth, logoutClick }) {
  const authActions = (
  <>
  <Link to="/profile">Страница профиля</Link>
  <button onClick={logoutClick}>Выйти</button>
  </>
  );

  const unauthActions = (
    <>
    <Link to="/sign-in">Войти</Link>
    </>
    );

  const userActions = isAuth === true ? authActions : unauthActions;

  return (
      <div className="header">
        <ul id="links">
          <li><NavLink exact to="/" activeClassName="active-link" >Главная</NavLink></li>
          <li><NavLink to="/contacts" activeClassName="active-link">Контакты</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">О нас</NavLink></li>
        </ul>
        <Redirect to="/" />
        <div id="user-actions">
          {userActions}
        </div>
      </div>
  );
}

export default Header;
