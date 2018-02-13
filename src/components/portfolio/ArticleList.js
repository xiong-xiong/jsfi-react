import React from 'react'
import ArticleListItem from './ArticleListItem'
import client from '../service/client'



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
      <div className='xiong-container'>


          {articles}

      </div>
    )
  }
}
