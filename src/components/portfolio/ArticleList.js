import React from 'react'
import ArticleListItem from './ArticleListItem'
import client from '../service/client'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



export default class ArticleList extends React.Component {

    constructor () {
        super()
        this.state = {articles: []}
    }

    componentDidMount () {

    client.getEntries({content_type: 'project'}).then((response)=>{
      this.setState({articles: response.items})
    })
  }

  render () {
    let articles = this.state.articles.map((article, i)=> <ArticleListItem id={i} key={i} article={article}/>)

    return (
      <ReactCSSTransitionGroup className='xiong-container' component='div' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        <div className='xiong-headline-banner'>
          <h2>Portfolio</h2>
        </div>

          {articles}

      </ReactCSSTransitionGroup>
    )
  }
}
