import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import HeadlineBanner from '../HeadlineBanner';
import WPAPI from '../../service/wpClient';
import FrontpageItem from '../items/FrontpageItem';

class Home extends Component {

  constructor () {
    super();
    this.state = {
      books: [],
      webdev: [],
      recipes: []
    }
 
  }

  componentDidMount (){
    //JUHA.BLOG REQUEST
    //JUHA.BLOG REQUEST
    const bookUrl = WPAPI.books;
    const webdevUrl = WPAPI.webdev;
    const recipesUrl = WPAPI.recipes;

    fetch(bookUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        books: response
      })
    })

    fetch(webdevUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        webdev: response
      })
    })
    
    fetch(recipesUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        recipes: response
      })
    })

  }
 
  render() {
    window.scrollTo(0, 0)
    
    return (

      <ReactCSSTransitionGroup className='xiong-container' component='div' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
      <HeadlineBanner headline="Home" />
        
        <div className="col-md-4 frontpageCol">
          <FrontpageItem posts={this.state.books} category="Books" site="Juha.Blog" />
        </div>
        <div className="col-md-4 frontpageCol">
          <FrontpageItem posts={this.state.webdev} category="Web development" site="Juha.Blog" />
        </div>
        
        <div className="col-md-4 frontpageCol">
          <FrontpageItem posts={this.state.recipes} category="Recipes" site="Reseptit.Blog" />
        </div>
      </ReactCSSTransitionGroup>

    );
  }
}

export default Home;
