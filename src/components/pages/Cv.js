import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




class Cv extends Component {
  render() {

    return (
      <ReactCSSTransitionGroup className='xiong-container' component='article' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
        <div className='xiongSingleArticle'>

        <h2>CV page</h2>


        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Cv;
