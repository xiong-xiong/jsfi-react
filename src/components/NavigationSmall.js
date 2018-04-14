import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class NavigationSmall extends Component {

  constructor() {
    super()

  }

  componentDidMount () {

}



  render() {

      return (
        <nav className='xiong-main-nav' style={menuStyle}>
          <span><i className='fa fa-angle-right' id='xiong-openmenu' onClick={this.state.openMenu}></i></span>
          <header className='xiong-header'>
            <h1>JS</h1>

          </header>
          <ul>
            <li><NavLink exact to='/'><i className='fa fa-home xiong-menuicon'></i></NavLink></li>
            <li><NavLink to='/cv'> <i className='fa fa-user xiong-menuicon'></i></NavLink></li>
            <li><NavLink to='/portfolio'><i className='fa fa-folder-open xiong-menuicon'></i> </NavLink></li>
            <li><NavLink to='/dev'><i className='fa fa-code xiong-menuicon'></i> </NavLink></li>
            <li><a href="http://juha.blog" target="_blank" rel="noopener noreferrer"><i className='fa fa-wordpress xiong-menuicon'></i> </a></li>
            <li><a href="http://reseptit.blog" target="_blank" rel="noopener noreferrer"><i className='fa fa-wordpress xiong-menuicon'></i> </a></li>
          </ul>
        </nav>
      );
    }
  }


export default NavigationSmall;
