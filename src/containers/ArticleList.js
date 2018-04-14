import React from 'react'
import PortfolioListItem from '../components/items/PortfolioListItem'
import CvListItem from '../components/items/CvListItem'
import client from '../service/client'




export default class ArticleList extends React.Component {

    constructor (props) {
        super(props)
        this.props = props
        this.state = {articles: []}
    }

    componentDidMount () {

    client.getEntries({content_type: this.props.contentType, order: this.props.order }).then((response)=>{
      this.setState({articles: response.items})
    })
  }

  render () {
    window.scrollTo(0, 0)
    let articles;
    if(this.props.contentType === "project") {
     articles = this.state.articles.map((article, i)=> <PortfolioListItem id={i} key={i} article={article}/>)
    } else if(this.props.contentType === "cv"){
       articles = this.state.articles.map((article, i)=> <CvListItem id={i} key={i} article={article}/>)
    }
    return (
      <div>

          {articles}

      </div>
    )
  }
}
