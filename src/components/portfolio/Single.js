import React from 'react'
import client from '../service/client'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
        return <h1>...</h1>

      }
      return (
        <ReactCSSTransitionGroup className='xiong-container' component='article' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>

        <div className='xiong-headline-banner'>
          <h2>{this.state.article.fields.title}</h2>
        </div>
          <div className='xiongSingleArticle'>


            <p>{this.state.article.fields.content}</p>

            <p className='xiongOccupation'>
            Occupation: {this.state.article.fields.occupation.fields.title}<span>, </span>
            {this.state.article.fields.occupation.fields.company}

            </p>

          </div>
          </ReactCSSTransitionGroup>

      )
    }
  }
