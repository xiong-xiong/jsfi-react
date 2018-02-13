import React from 'react'
import client from '../service/client'
import {Link} from 'react-router-dom'

export default class Single extends React.Component {
  constructor() {
    super()
    this.state = {article: null}

  }
  componentDidMount (){
      client.getEntries({content_type: 'project', 'fields.slug': this.props.match.params.slug})
        .then((response) => {
          this.setState({article: response.items[0]})
        })

    }

    render () {

      if (!this.state.article){
        return <h1>Loading..</h1>

      }
      return (
        <article className='xiong-container'>

          <Link to={`/`} className='closeArticle'><i className='fa fa-close'></i></Link>
          <div className='xiongSingleArticle'>

            <h2>{this.state.article.fields.title}</h2>
            <p>{this.state.article.fields.content}</p>
            
            <p className='xiongOccupation'>
            Occupation: {this.state.article.fields.occupation.fields.title}<span>, </span>
            {this.state.article.fields.occupation.fields.company}

            </p>

          </div>
        </article>
      )
    }
  }
