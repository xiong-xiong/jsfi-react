import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
      <nav className='xiong-main-nav'>
        <header className='xiong-header'>
          <h1>Juha Stenroos</h1>
          <span className='xiong-slogan'>Web developer</span>
        </header>
        <ul>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/cv'>Cv</NavLink></li>
          <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
          <li><NavLink to='/dev'>Dev</NavLink></li>
          <li><a href="http://juha.blog" target="_blank" rel="noopener noreferrer">Juha.blog</a></li>
          <li><a href="http://reseptit.blog" target="_blank" rel="noopener noreferrer">Reseptit.blog</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
