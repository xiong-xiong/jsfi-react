import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ArticleList from '../../containers/ArticleList'
import HeadlineBanner from '../HeadlineBanner';


class Cv extends Component {
  render() {
    
    return (
      <ReactCSSTransitionGroup className='xiong-container' component='article' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
      <HeadlineBanner headline="CV" />

        <ArticleList contentType="cv" order="fields.order" />
      </ReactCSSTransitionGroup>
    );
  }
}

export default Cv;
