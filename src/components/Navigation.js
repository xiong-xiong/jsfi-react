import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class Navigation extends Component {
  constructor() {
    super()
    this.state = {expand: true}
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }


  openMenu(){
    this.setState({expand: false})
  }
  closeMenu(){
    this.setState({expand: true})
  }

  componentDidMount () {

}



  render() {
    if(this.state.expand === false) {
      const menuStyle = {
        width: 300
      }


      return (
        <div className='xiong-expanded-nav-wrap'>
          <ReactCSSTransitionGroup component='nav' transitionName='menu' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
            <nav className='xiong-main-nav' id='bigNav' style={menuStyle}>
              <span><i className='fa fa-times' id='xiong-closemenu' onClick={this.closeMenu}></i></span>
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
          </ReactCSSTransitionGroup>
          <div className='xiong-expanded-nav-mask' onClick={this.closeMenu}>
          </div>
        </div>
      );
    } else if(this.state.expand === true) {
      const menuStyle = {
        width: 90
      }
      return (
        <nav className='xiong-main-nav' id='smallNav' style={menuStyle}>
          <span><i className='fa fa-angle-right' id='xiong-openmenu' onClick={this.openMenu}></i></span>
          <header className='xiong-header'>
            <h1>JS</h1>

          </header>
          <ul>
            <li><NavLink exact to='/'><i className='fa fa-home xiong-menuicon'></i></NavLink></li>
            <li><NavLink to='/cv'> <i className='fa fa-user xiong-menuicon'></i></NavLink></li>
            <li><NavLink to='/portfolio'><i className='fa fa-folder-open xiong-menuicon'></i> </NavLink></li>
            <li><NavLink to='/dev'><i className='fa fa-code xiong-menuicon'></i> </NavLink></li>
            <li><a href="http://juha.blog" target="_blank" rel="noopener noreferrer"><i className='fa fa-pencil-square xiong-menuicon'></i> </a></li>
            <li><a href="http://reseptit.blog" target="_blank" rel="noopener noreferrer"><i className='fa fa-cutlery xiong-menuicon'></i> </a></li>
          </ul>

        </nav>
      );
    }
  }
}

export default Navigation;
