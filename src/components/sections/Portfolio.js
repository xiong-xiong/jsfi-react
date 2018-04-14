import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ArticleList from '../../containers/ArticleList'
import HeadlineBanner from '../HeadlineBanner';



export default class Portfolio extends React.Component {

    

  render () {

    return (
      <ReactCSSTransitionGroup className='xiong-container' component='div' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
         <HeadlineBanner headline="Portfolio" />

          <ArticleList contentType="project" order="sys.createdAt" />

      </ReactCSSTransitionGroup>
    )
  }
}
